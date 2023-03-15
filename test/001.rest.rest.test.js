const testOptions = {
    environment: "test",
    debug: true,
    debugSQL: true,
    debugErrors: true,
};
const axios = require("axios");
const client = axios.create();
const RestFactory = require("../src/rest.js");

const check = {
    isSame: function (base, compared) {
        return base === compared;
    },
    hasSameProperties: function (base, compared, id = false) {
        if (typeof base !== "object") throw new Error("Required «base» to be an object" + (id ? (" on " + id + "»") : ""));
        if (typeof compared !== "object") throw new Error("Required «compared» to be an object" + (id ? (" on " + id + "»") : ""));
        const propertyIds = Object.keys(compared);
        for (let index = 0; index < propertyIds.length; index++) {
            const propertyId = propertyIds[index];
            const propertyValue = compared[propertyId];
            const propertyValue2 = base[propertyId];
            if (propertyValue !== propertyValue2) {
                throw new Error("Required «base." + propertyId + "» (" + typeof propertyValue2 + ") to be equal to «compared." + propertyId + "» (" + typeof propertyValue + ")");
            }
        }
        return true;
    }
};

describe("Test for REST Basic API", function () {
    this.timeout(1000 * 5);

    let dataServer = undefined;
    let httpServer = undefined;
    let DataService = undefined;
    let DataServer = undefined;
    let RestInterface = undefined;
    let AuthInterface = undefined;
    let RestByMySQL = undefined;
    let AuthByMySQL = undefined;
    let session_token = undefined;
    let confirmation_token = undefined;
    let recovery_token = undefined;

    it("RestFactory creates the whole api customizedly", function () {
        const restInstance = RestFactory(testOptions);
        DataService = restInstance.DataService;
        DataServer = restInstance.DataServer;
        RestInterface = restInstance.RestInterface;
        AuthInterface = restInstance.AuthInterface;
        RestByMySQL = restInstance.RestByMySQL;
        AuthByMySQL = restInstance.AuthByMySQL;
    });

    it("RestInterface and AuthInterface instances follow correspondant interfaces structure convention", function () {
        const restApi = new RestInterface();
        if (typeof restApi.initialize !== "function") throw new Error("error 1");
        if (typeof restApi.selectMany !== "function") throw new Error("error 2");
        if (typeof restApi.selectOne !== "function") throw new Error("error 3");
        if (typeof restApi.insertMany !== "function") throw new Error("error 4");
        if (typeof restApi.insertOne !== "function") throw new Error("error 5");
        if (typeof restApi.updateMany !== "function") throw new Error("error 7");
        if (typeof restApi.updateOne !== "function") throw new Error("error 8");
        if (typeof restApi.deleteMany !== "function") throw new Error("error 10");
        if (typeof restApi.deleteOne !== "function") throw new Error("error 11");
        if (typeof restApi.getFile !== "function") throw new Error("error 13");
        if (typeof restApi.setFile !== "function") throw new Error("error 14");
        if (typeof restApi.resetDatabase !== "function") throw new Error("error 15");
        const authApi = new AuthInterface();
        if (typeof authApi.initialize !== "function") throw new Error("error 20");
        if (typeof authApi.authenticate !== "function") throw new Error("error 21");
        if (typeof authApi.login !== "function") throw new Error("error 22");
        if (typeof authApi.logout !== "function") throw new Error("error 23");
        if (typeof authApi.refresh !== "function") throw new Error("error 24");
        if (typeof authApi.register !== "function") throw new Error("error 25");
        if (typeof authApi.confirm !== "function") throw new Error("error 26");
        if (typeof authApi.forgot !== "function") throw new Error("error 27");
        if (typeof authApi.recover !== "function") throw new Error("error 28");
        if (typeof authApi.unregister !== "function") throw new Error("error 29");
        if (typeof authApi.hasAuthorizationFor !== "function") throw new Error("error 30");
        if (typeof authApi.resetAuth !== "function") throw new Error("error 31");

    });

    it("RestByMySQL instance follows interface structure convention", function (done) {
        const api = new RestByMySQL({
            environment: "test",
            credentials: {
                user: "root",
                password: "toor",
                host: "127.0.0.1",
                port: 3306,
                database: "testing_rest_1"
            }
        });
        if (typeof api.initialize !== "function") throw new Error("error 5.0.41");
        if (typeof api.selectMany !== "function") throw new Error("error 5.0.42");
        if (typeof api.selectOne !== "function") throw new Error("error 5.0.43");
        if (typeof api.insertMany !== "function") throw new Error("error 5.0.44");
        if (typeof api.insertOne !== "function") throw new Error("error 5.0.45");
        if (typeof api.updateMany !== "function") throw new Error("error 5.0.47");
        if (typeof api.updateOne !== "function") throw new Error("error 5.0.48");
        if (typeof api.deleteMany !== "function") throw new Error("error 5.0.50");
        if (typeof api.deleteOne !== "function") throw new Error("error 5.0.51");
        if (typeof api.getFile !== "function") throw new Error("error 5.0.53");
        if (typeof api.setFile !== "function") throw new Error("error 5.0.54");
        if (typeof api.resetDatabase !== "function") throw new Error("error 5.0.60");
        return done();
    });

    it("DataServer initializes", async function () {
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
    });

    it("DataServer adds services", async function () {
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
    });

    it("DataServer resets database and auth", async function () {
        await dataServer.resetDatabase();
    });

    it("DataServer starts http server", async function () {
        httpServer = await dataServer.listen(7000);
    });

    it("DataServer serves auth: /register", async function () {
        const responseRegister = await client.get('http://127.0.0.1:7000/auth/api/v1/register?' + new URLSearchParams({
            user: "usuario_0001",
            password: "usuario.001.password",
            email: "usuario_0001@gmail.com",
        }).toString());
        console.log(responseRegister);
        check.hasSameProperties(responseRegister.data.data, {
            message: "user successfully registered"
        });
        confirmation_token = responseRegister.data.data.confirmation_token;
    });

    it("DataServer serves auth: /confirm", async function () {
        const responseConfirm = await client.get('http://127.0.0.1:7000/auth/api/v1/confirm?' + new URLSearchParams({
            confirmation_token
        }).toString());
        check.hasSameProperties(responseConfirm.data.data, {
            message: "user successfully confirmed"
        });
    });

    it("DataServer serves auth: /login", async function () {
        const responseLogin = await client.get('http://127.0.0.1:7000/auth/api/v1/login?' + new URLSearchParams({
            user: "usuario_0001",
            password: "usuario.001.password",
        }).toString());
        check.hasSameProperties(responseLogin.data.data, {
            message: "user successfully logged in"
        });
        session_token = responseLogin.data.data.session_token;
    });

    it("DataServer serves auth: /logout", async function () {
        const responseLogout = await client.get('http://127.0.0.1:7000/auth/api/v1/logout?' + new URLSearchParams({
            session_token
        }).toString());
        check.hasSameProperties(responseLogout.data.data, {
            message: "user successfully logged out"
        });
    });

    it("DataServer serves auth: /forgot", async function () {
        const responseForgot = await client.get('http://127.0.0.1:7000/auth/api/v1/forgot?' + new URLSearchParams({
            user: "usuario_0001"
        }).toString());
        check.hasSameProperties(responseForgot.data.data, {
            message: "user successfully notified with recovery email",
        });
        recovery_token = responseForgot.data.data.recovery_token;
    });

    it("DataServer serves auth: /recover", async function () {
        const responseRecover = await client.get('http://127.0.0.1:7000/auth/api/v1/recover?' + new URLSearchParams({
            recovery_token
        }).toString());
        check.hasSameProperties(responseRecover.data.data, {
            message: "user successfully recovered",
        });
        recovery_token = responseRecover.data.data.password;
    });

    it("DataServer serves auth: /unregister", async function () {
        const responseLogin1 = await client.get('http://127.0.0.1:7000/auth/api/v1/login?' + new URLSearchParams({
            user: "usuario_0001",
            password: recovery_token,
        }).toString());
        session_token = responseLogin1.data.data.session_token;
        const responseUnregister = await client.get('http://127.0.0.1:7000/auth/api/v1/unregister?' + new URLSearchParams({
            user: "usuario_0001",
            password: recovery_token,
            session_token
        }).toString());
        check.hasSameProperties(responseUnregister.data.data, {
            message: "user successfully unregistered",
        });
    });

    it("DataServer serves auth: /modify", async function () {
        const responseLogin1 = await client.get('http://127.0.0.1:7000/auth/api/v1/login?' + new URLSearchParams({
            user: "administrator",
            password: "administrator",
        }).toString());
        session_token = responseLogin1.data.data.session_token;
        const responseModify = await client.get('http://127.0.0.1:7000/auth/api/v1/modify?' + new URLSearchParams({
            user: "usuario_0001",
            password: recovery_token,
            session_token: responseLogin1.data.data.session_token,
        }).toString());
        check.hasSameProperties(responseModify.data.data, {
            message: "user successfully modified",
        });
    });

    it("DataServer serves rest: /define", async function () {
        ////////////////////////////////////////////////////
        // 0/8: DEFINE:
        const responseDefine1 = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/define?');
        check.hasSameProperties(responseDefine1.data.data, {
            id: "model_one",
            path: "/model-one",
            table: "model_one",
            class: "ModelOne",
        });
        const responseDefine2 = await client.get('http://127.0.0.1:7000/rest/api/v1/model-two/define?');
        check.hasSameProperties(responseDefine2.data.data, {
            id: "model_two",
            path: "/model-two",
            table: "model_two",
            class: "ModelTwo",
        });
    });

    it("DataServer serves rest: /select/one", async function () {
        ////////////////////////////////////////////////////
        // 1/8: SELECT ONE:
        const responseSelectOne = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/select/one?' + new URLSearchParams({
            where: '[["id","=","1"]]'
        }));
        check.hasSameProperties(responseSelectOne.data.data, {
            id: 1,
            name: 'unit one',
            details: 'about unit one'
        });
        let responseSelectOneErrors = [];
        try {
            await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/select/one?' + new URLSearchParams({
                where: '[["id","in",[1,2],"array"]]'
            }));
        } catch (error) {
            responseSelectOneErrors.push(error);
        }
        try {
            await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/select/one?' + new URLSearchParams({
                where: '[["id","=",0]]'
            }));
        } catch (error) {
            responseSelectOneErrors.push(error);
        }
        check.isSame(responseSelectOneErrors.length, 2);
    });

    it("DataServer serves rest: /select/many", async function () {
        ////////////////////////////////////////////////////
        // 2/8: SELECT MANY:
        const responseSelectMany = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/select/many?' + new URLSearchParams({
            where: '[["id","<=",4],["id",">=",2]]',
            order: '["!id"]'
        }));
        check.isSame(responseSelectMany.data.data.length, 3);
        check.hasSameProperties(responseSelectMany.data.data[0], {
            id: 4,
            name: 'unit four',
            details: 'about unit four'
        });
    });

    it("DataServer serves rest: /insert/one", async function () {
        ////////////////////////////////////////////////////
        // 3/8: INSERT ONE:
        const responseInsertOne = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/insert/one?' + new URLSearchParams({
            item: '{"name": "new model 1","details": "about new model 1"}'
        }));
        check.hasSameProperties(responseInsertOne.data.data, {
            id: 8,
            rows: 1,
        });
    });

    it("DataServer serves rest: /insert/many", async function () {
        ////////////////////////////////////////////////////
        // 4/8: INSERT MANY:
        const responseInsertMany = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/insert/many?' + new URLSearchParams({
            items: '[{"name":"new model 1","details":"about new model 1"},{"name":"new model 2","details":"about new model 2"}]'
        }));
        check.hasSameProperties(responseInsertMany.data.data, {
            firstId: 9,
            rows: 2,
        });
    });

    it("DataServer serves rest: /update/one", async function () {
        ////////////////////////////////////////////////////
        // 5/8: UPDATE ONE:
        const responseUpdateOne = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/update/one?' + new URLSearchParams({
            where: '[["id", "in", [1], "array"]]',
            values: '{"name":"deprecated model 1","details":"about deprecated model 1" }'
        }));
        check.hasSameProperties(responseUpdateOne.data.data, {
            rows: 1
        });
        let responseUpdateOneErrors = [];
        try {
            await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/update/one?' + new URLSearchParams({
                where: '[["id","in",[1,2],"array"]]',
                values: '{"details":"never applied change"}'
            }));
        } catch (error) {
            responseUpdateOneErrors.push(error);
        }
        try {
            await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/update/one?' + new URLSearchParams({
                where: '[["id","=",0]]',
                values: '{"details":"never applied change"}'
            }));
        } catch (error) {
            responseUpdateOneErrors.push(error);
        }
        check.isSame(responseUpdateOneErrors.length, 2);
    });

    it("DataServer serves rest: /update/many", async function () {
        ////////////////////////////////////////////////////
        // 6/8: UPDATE MANY:
        const responseUpdateMany = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/update/many?' + new URLSearchParams({
            where: '[["id", "in", [2,3], "array"]]',
            values: '{"details":"about deprecated model ?" }'
        }));
        check.hasSameProperties(responseUpdateMany.data.data, {
            rows: 2
        });
    });

    it("DataServer serves rest: /delete/one", async function () {
        ////////////////////////////////////////////////////
        // 7/8: DELETE ONE:
        const responseDeleteOne = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/delete/one?' + new URLSearchParams({
            where: '[["id", "=", 1]]',
        }));
        check.hasSameProperties(responseDeleteOne.data.data, {
            rows: 1
        });
        let responseDeleteOneErrors = [];
        try {
            await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/delete/one?' + new URLSearchParams({
                where: '[["id","in",[2,3],"array"]]'
            }));
        } catch (error) {
            responseDeleteOneErrors.push(error);
        }
        try {
            await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/delete/one?' + new URLSearchParams({
                where: '[["id","=",0]]',
            }));
        } catch (error) {
            responseDeleteOneErrors.push(error);
        }
        check.isSame(responseDeleteOneErrors.length, 2);
    });

    it("DataServer serves rest: /delete/many", async function () {
        ////////////////////////////////////////////////////
        // 8/8: DELETE MANY:
        const responseDeleteMany = await client.get('http://127.0.0.1:7000/rest/api/v1/model-one/delete/many?' + new URLSearchParams({
            where: '[["id", "in", [2,3], "array"]]',
        }));
        check.hasSameProperties(responseDeleteMany.data.data, {
            rows: 2
        });
    });

    it("DataServer closes server and database connections", async function () {
        await dataServer.stopDatabaseConnection();
        await dataServer.stopHttpServer();
    });

});