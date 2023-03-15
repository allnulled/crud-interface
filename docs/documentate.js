const RestFactory = require(__dirname + "/../src/rest.js");
const rest = RestFactory({});
require(__dirname + "/documentator.js")(__dirname, rest);

