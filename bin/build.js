const fs = require("fs");

const c1 = fs.readFileSync(__dirname + "/../src/ranas-db.js").toString();
const c2 = fs.readFileSync(__dirname + "/../src/rest.js").toString();

fs.writeFileSync(__dirname + "/../dist/rest.standalone.js", c1 + "\n" + c2, "utf8");
fs.writeFileSync(__dirname + "/../dist/rest.alone.js", c2, "utf8");