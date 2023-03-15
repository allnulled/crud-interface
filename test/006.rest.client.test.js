let dataServer = undefined;
let client = undefined;
let common_data = {};

describe("Test for Remote REST Client API", function() {
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
        common_data.footprints = 0;
        await dataServer.hooks.addHooks([
            "service://rest/api/v1/model-one/select/one@onFormatOutput::after",
            "service://rest/api/v1/model-one/select/many@onFormatOutput::after",
        ], "Filtrar details de las instancias", function(scope) {
            common_data.footprints++;
        });
        await dataServer.resetDatabase();
        await dataServer.listen(7007);
        client = dataServer.createClient("http://127.0.0.1:7007");
    });

    it("can login via client.auth", async function() {
        try {
            const responseLogin = await client.auth.login("administrator", "administrator");
            const session_token = responseLogin.data.data.session_token;
            client.server.client.defaults.headers.common.Authorization = session_token;
        } catch(error) {
            throw error;
        }
    });

    it("can selectOne via client.rest", async function () {
        try {
            const response_selectOne = await client.rest.selectOne("model-one", [["id","=","1"]], [], [], []);
            const response_data = response_selectOne.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected 8943621");
            if( response_data.id !== 1) throw new Error("Response not formed as expected 549230")
        } catch (error) {
            throw error;
        }
    });

    it("can selectMany via client.rest", async function () {
        try {
            const response_selectMany = await client.rest.selectMany("model-one", [], [], [], []);
            const response_data = response_selectMany.data.data;
            if(typeof response_data !== "object") throw new Error("Response not formed as expected 437128979");
            if (response_data.length <= 0) throw new Error("Response not formed as expected 431278439");
        } catch (error) {
            throw error;
        }
    });

    it("can selectMany via client.rest", async function () {
        try {
            const response_selectMany = await client.rest.selectMany("model-one", [], [], [], []);
            const response_data = response_selectMany.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can selectMany via client.rest", async function () {
        try {
            const response_selectMany = await client.rest.selectMany("model-one", [], [], [], []);
            const response_data = response_selectMany.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can insertOne via client.rest", async function () {
        try {
            const response_insertOne = await client.rest.insertOne("model-one", {name:"x"}, [], [], []);
            const response_data = response_insertOne.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can insertMany via client.rest", async function () {
        try {
            const response_insertMany = await client.rest.insertMany("model-one", [{name:"a"},{name:"b"},{name:"c"}], [], [], []);
            const response_data = response_insertMany.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can updateOne via client.rest", async function () {
        try {
            const response_updateOne = await client.rest.updateOne("model-one", [["id","=",1]], {name:"renamed to a2"}, [], []);
            const response_data = response_updateOne.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can updateMany via client.rest", async function () {
        try {
            const response_updateMany = await client.rest.updateMany("model-one", [["id", "in", [2,3], "array"]], { name: "renamed to x3" }, [], []);
            const response_data = response_updateMany.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can deleteOne via client.rest", async function () {
        try {
            const response_deleteOne = await client.rest.deleteOne("model-one", [["id","=",4]], [], [], []);
            const response_data = response_deleteOne.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can deleteMany via client.rest", async function () {
        try {
            const response_deleteMany = await client.rest.deleteMany("model-one", [["id","=","1"]], [], [], []);
            const response_data = response_deleteMany.data.data;
            if (typeof response_data !== "object") throw new Error("Response not formed as expected");
        } catch (error) {
            throw error;
        }
    });

    it("can stop everything", async function () {
        await dataServer.stopDatabaseConnection();
        await dataServer.stopHttpServer();
    });

});