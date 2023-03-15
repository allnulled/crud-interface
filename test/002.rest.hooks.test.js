let permadata = 0;
let Hooks = undefined;
let hooks = undefined;

describe("Test for DataServer Hooks API", function() {
    this.timeout(1000 * 5);
    
    it("can load and instantiate the main class", async function () {
        const RestFactory = require("../src/rest.js");
        Hooks = RestFactory().Hooks;
        hooks = Hooks.create();
    });

    it("can add hook", async function() {
        hooks.addHook("hook://custom/insert/product", "Hooks that says hello on insert product", function (context) {
            permadata = 1;
            console.log("Hello, you are inserting a product!");
        });
    });

    it("can use hook", async function () {
        await hooks.useHook("hook://custom/insert/product", {});
        if (permadata !== 1) throw new Error("error 001");
    });

    it("can replace hook", async function () {
        console.log(hooks.hooks);
        hooks.replaceHook("hook://custom/insert/product", "Hooks that says hello on insert product", {
            id: "Refreshed hook that says hello on insert product",
            event: function (context) {
                permadata = 3;
                console.log("Hello, you are inserting a product and we changed the hook on runtime!");
            }
        });
        permadata = 2;
        await hooks.useHook("hook://custom/insert/product", {});
        if (permadata !== 3) throw new Error("error 002");
    });
    
    it("can remove hook", async function () {
        hooks.removeHook("hook://custom/insert/product", "Refreshed hook that says hello on insert product");
        permadata = 4;
        await hooks.useHook("hook://custom/insert/product", {});
        if (permadata !== 4) throw new Error("error 003");
    });
    
});