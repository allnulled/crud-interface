let dataServer = undefined;
let client = undefined;
let common_data = {};

describe("Test for isomorphic Remote/Local REST Client API", function () {
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
            id: "model-one",
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
        await dataServer.hooks.addHooks([
            "service://rest/api/v1/model-one/select/one@onFormatOutput::after",
            "service://rest/api/v1/model-one/select/many@onFormatOutput::after",
        ], "Lanzar error porque sí en los select de model-one", function (scope) {
            throw new Error("Service not yet available");
        });
        await dataServer.resetDatabase();
        await dataServer.listen(7007);
        client = dataServer.createClient("http://127.0.0.1:7007");
    });

    it("can login via client.auth", async function () {
        try {
            const responseLogin = await client.auth.login("administrator", "administrator");
            const session_token = responseLogin.data.data.session_token;
            client.server.client.defaults.headers.common.Authorization = session_token;
        } catch (error) {
            throw error;
        }
    });

    it("throws error on selectOne on multiple row matching (isomorphic Browser Errores API from Axios Errores API)", async function () {
        try {
            const response_selectOne = await client.rest.selectOne("model-one", [["id", "!=", "1"]], [], [], []);
            if (typeof response_data !== "object") throw new Error("Response not formed as expected 8943621");
        } catch (error) {
            // [@SAME-IN-BROWSER
            if (typeof error.name !== "string") throw new Error("error 3748192800010");
            if (typeof error.message !== "string") throw new Error("error 3748192800011");
            if (typeof error.response !== "object") throw new Error("error 374819280000");
            if (typeof error.response.status !== "number") throw new Error("error 374819280001");
            if (typeof error.response.status !== "number") throw new Error("error 374819280001");
            if (typeof error.response.statusText !== "string") throw new Error("error 374819280002");
            if (typeof error.response.headers !== "object") throw new Error("error 374819280003");
            if (typeof error.response.data !== "object") throw new Error("error 374819280004");
            // SAME-IN-BROWSER@]
            if (typeof error.stack !== "string") throw new Error("error 3748192800012");
        }
    });

    it("can logout via client.auth", async function () {
        try {
            const responseLogout = await client.auth.logout(client.server.client.defaults.headers.common.Authorization);
            delete client.server.client.defaults.headers.common.Authorization;
        } catch (error) {
            throw error;
        }
    });

    it("can stop everything", async function () {
        await dataServer.stopDatabaseConnection();
        await dataServer.stopHttpServer();
    });

});