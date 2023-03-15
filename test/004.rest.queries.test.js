let dataServer = undefined;
const axios = require("axios");
const client = axios.create();
let session_token = undefined;
const common_data = {};

describe("Test for REST Queries API", function() {
    this.timeout(1000 * 5);
    
    it("can start a custom server from scratch", async function () {
        const RestFactory = require("../src/rest.js");
        const { DataServer } = RestFactory();
        dataServer = await DataServer.initialize({
            adapter: "mysql",
            credentials: {
                user: "root",
                password: "toor",
                host: "127.0.0.1",
                port: 3306,
                database: "testing_rest_1"
            },
            authExtension: {},
            restExtension: {
                seeder: async function () {
                    await this.connection.proxifiedQuery([
                        "INSERT INTO model_one (`name`, `details`) VALUES ",
                        "  ('unit one', 'about unit one'),",
                        "  ('unit two', 'about unit two'),",
                        "  ('unit three', 'about unit three'),",
                        "  ('unit four', 'about unit four'),",
                        "  ('unit five', 'about unit five'),",
                        "  ('unit six', 'about unit six'),",
                        "  ('unit seven', 'about unit seven')"
                    ].join("\n"));
                    await this.connection.proxifiedQuery([
                        "INSERT INTO model_two (`name`, `details`) VALUES ",
                        "  ('unit one', 'about unit one'),",
                        "  ('unit two', 'about unit two'),",
                        "  ('unit three', 'about unit three'),",
                        "  ('unit four', 'about unit four'),",
                        "  ('unit five', 'about unit five'),",
                        "  ('unit six', 'about unit six'),",
                        "  ('unit seven', 'about unit seven')"
                    ].join("\n"));
                }
            }
        });
        await dataServer.addService({
            id: "model_one",
            path: "/model-one",
            table: "model_one",
            class: "ModelOne",
            schema: {
                attributes: {},
                columns: {
                    id: { isType: "integer" },
                    name: { isType: "varchar", hasMaxLength: 500 },
                    details: { isType: "text" }
                }
            },
            creationScript: [
                "CREATE TABLE model_one (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(500),",
                "  details TEXT",
                ");"
            ].join("\n")
        });
        await dataServer.addService({
            id: "model_two",
            path: "/model-two",
            table: "model_two",
            class: "ModelTwo",
            schema: {
                attributes: {},
                columns: {
                    id: { isType: "integer" },
                    name: { isType: "varchar", hasMaxLength: 500 },
                    details: { isType: "text" }
                }
            },
            creationScript: [
                "CREATE TABLE model_two (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(500),",
                "  details TEXT",
                ");"
            ].join("\n"),
        });
        common_data.footprints = 0;
        await dataServer.hooks.addHooks([
            "service://rest/api/v1/model-one/select/one@onFormatOutput::after",
            "service://rest/api/v1/model-one/select/many@onFormatOutput::after",
        ], "Filtrar details de las instancias", function(scope) {
            common_data.footprints++;
        });
        await dataServer.resetDatabase();
        await dataServer.listen(7007);
    });

    it("can connect as administrator", async function() {
        const response = await client.get("http://127.0.0.1:7007/auth/api/v1/login?" + new URLSearchParams({
            user: "administrator",
            password: "administrator",
        }).toString());
        session_token = response.data.data.session_token;
        const authentication = response.data.data.authentication;
        if (authentication.privileges.length !== 1) throw new Error("error 4080");
        if (authentication.groups.length !== 1) throw new Error("error 4081");
        if (authentication.groups[0].name !== "administrators") throw new Error("error 4082");
        if (authentication.privileges[0].name !== "to administrate") throw new Error("error 4083");
    });

    it("can customize authorization via hooks", async function () {
        if(common_data.footprints !== 0) throw new Error("error 7801");
        await client.get("http://127.0.0.1:7007/rest/api/v1/model-one/select/many?" + new URLSearchParams({
            where: JSON.stringify([[ "id", "<", 10 ]])
        }).toString());
        console.log(common_data.footprints);
        if(common_data.footprints !== 1) throw new Error("error 7802");
        await client.get("http://127.0.0.1:7007/rest/api/v1/model-one/select/many?" + new URLSearchParams({
            where: JSON.stringify([[ "id", "<", 10 ]])
        }).toString());
        if(common_data.footprints !== 2) throw new Error("error 7803");
        await client.get("http://127.0.0.1:7007/rest/api/v1/model-one/select/many?" + new URLSearchParams({
            where: JSON.stringify([[ "id", "<", 10 ]])
        }).toString());
        if(common_data.footprints !== 3) throw new Error("error 7804");
    });

    it("can stop everything", async function () {
        await dataServer.stopDatabaseConnection();
        await dataServer.stopHttpServer();
    });

});