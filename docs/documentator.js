module.exports = function(baseDirectory, apiObject) {

    const configurations = {
        defaultTextContent: "Por documentar."
    };

    const padStart = function (text, digits = 5, filler = "0") {
        let output = text + "";
        while (output.length < digits) {
            output = filler + output;
        }
        return output;
    };

    const introspectInheritance = function (classId, classValue, allClasses) {
        const classPrototype = classValue.prototype;
        const allClassesIds = Object.keys(allClasses);
        SearchingForPrototypes:
        for (let index = 0; index < allClassesIds.length; index++) {
            const class2Id = allClassesIds[index];
            if (classId === class2Id) {
                continue SearchingForPrototypes;
            }
            const class2Value = allClasses[class2Id];
            const class2Prototype = class2Value.prototype;
            if (classPrototype === class2Prototype) {
                return class2Id;
            }
        }
    };

    const introspectStatics = function (classId, classValue, allClasses) {
        return Object.keys(classValue).reduce((output, item, index) => {
            output[item] = [`${classId + "." + item}`, `${index}`, `${typeof classValue}`];
            return output;
        }, {});
    };

    const introspectDynamics = function (classId, classValue, allClasses) {
        if (classId === "default") {
            return {};
        }
        return Object.keys(classValue.prototype).reduce((output, item, index) => {
            output[item] = [`${classId + ".prototype." + item}`, `${index}`, `${typeof classValue}`];
            return output;
        }, {});
    };

    const introspectClasses = function (allClasses) {
        const allData = {};
        const allClassesIds = Object.keys(allClasses);
        for (let index = 0; index < allClassesIds.length; index++) {
            const classId = allClassesIds[index];
            const classValue = allClasses[classId];
            const classData = {
                id: classId,
                inherits: introspectInheritance(classId, classValue, allClasses),
                statics: introspectStatics(classId, classValue, allClasses),
                dynamics: introspectDynamics(classId, classValue, allClasses)
            };
            allData[classId] = classData;
        }
        return allData;
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // BEGINING:
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    const introspection = introspectClasses(apiObject);

    try {
        require("fs").rmdirSync(baseDirectory + "/documentables", { recursive: true });
        require("fs").mkdirSync(baseDirectory + "/documentables");
    } catch (error) {

    }

    require("fs").writeFileSync(baseDirectory + "/introspection.json", JSON.stringify(introspection, null, 2), "utf8");

    let globalPropertyCount = 0;

    const introspectionClasses = Object.keys(introspection);
    IntrospectingClasses:
    for (let index = 0; index < introspectionClasses.length; index++) {
        const classIntrospectionId = introspectionClasses[index];
        const classIntrospection = introspection[classIntrospectionId];
        const classContents = (() => {
            try {
                return require("fs").readFileSync(baseDirectory + "/documentators/" + classIntrospectionId + ".md", "utf8");
            } catch (error) {
                return configurations.defaultTextContent;
            }
        })();
        if (typeof classContents === "string") {
            require("fs").writeFileSync(baseDirectory + "/documentables/" + padStart(globalPropertyCount++) + "." + classIntrospectionId + ".md", `\n\n----\n\n## ${classIntrospectionId}\n\n**Tipo:** class\n\n**Índice de propiedad:** root\n\n${classContents}\n\n\n\n`, "utf8");
        } else {
            
        }
        const classIntrospectionProperties = Object.keys(classIntrospection.statics);
        for (let index2 = 0; index2 < classIntrospectionProperties.length; index2++) {
            const classIntrospectionPropertyId = classIntrospectionProperties[index2];
            const classIntrospectionProperty = classIntrospection.statics[classIntrospectionPropertyId];
            const [propertyName, propertyId, propertyType] = classIntrospectionProperty;
            const contents = (() => {
                try {
                    return require("fs").readFileSync(baseDirectory + "/documentators/" + propertyName + ".md", "utf8");
                } catch (error) {
                    return configurations.defaultTextContent;
                }
            })();
            if(typeof contents === "string") {
                require("fs").writeFileSync(baseDirectory + "/documentables/" + padStart(globalPropertyCount++) + "." + propertyName + ".md", `${propertyId === 0 ? "----\n\n" : ""}## ${propertyName}\n\n**Tipo:** ${propertyType}\n\n**Índice de propiedad:** ${propertyId}\n\n${contents}\n\n\n\n`, "utf8");
            }
        }
        const classIntrospectionDynamicProperties = Object.keys(classIntrospection.dynamics);
        for (let index2 = 0; index2 < classIntrospectionDynamicProperties.length; index2++) {
            const classIntrospectionPropertyId = classIntrospectionDynamicProperties[index2];
            const classIntrospectionProperty = classIntrospection.dynamics[classIntrospectionPropertyId];
            const [propertyName, propertyId, propertyType] = classIntrospectionProperty;
            const contents = (() => {
                try {
                    return require("fs").readFileSync(baseDirectory + "/documentators/" + propertyName + ".md", "utf8");
                } catch (error) {
                    return configurations.defaultTextContent;
                }
            })();
            if (typeof contents === "string") {
                require("fs").writeFileSync(baseDirectory + "/documentables/" + padStart(globalPropertyCount++) + "." + propertyName + ".md", `${propertyId === 0 ? "----\n\n" : ""}## ${propertyName}\n\n**Tipo:** ${propertyType}\n\n**Índice de propiedad:** ${propertyId}\n\n${contents}\n\n\n\n`, "utf8");
            }
        }
    }

    const files = require("fs").readdirSync(baseDirectory + "/documentables");

    let finalContents = "";
    for (let index = 0; index < files.length; index++) {
        const file = baseDirectory + "/documentables/" + files[index];
        const contents = require("fs").readFileSync(file).toString();
        finalContents += contents + "\n\n----\n\n";
    }

    require("fs").writeFileSync(__dirname + "/REFERENCE.md", finalContents, "utf8");

};