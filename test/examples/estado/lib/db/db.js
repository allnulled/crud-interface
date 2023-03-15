
( async () => {
await Castelog.metodos.un_sistema_rest({ platform:"browser",
debug:false
}, { adapter:"dexie",
credentials:{ user:"root",
password:"toor",
host:"127.0.0.1",
port:3306,
database:"testing_rest_1"
}
}, async (RestAPI) => {
console.log("Instalando sistema REST...");
}, "default", error => {
console.log(error);});})();