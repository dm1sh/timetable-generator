/* eslint-disable @typescript-eslint/no-var-requires */
const incstr = require("incstr");
const { getGeneratorData, saveGeneratorData } = require("./generatorHelpers");

const createUniqueIdGenerator = generatorIdentifier => {
  const uniqIds = getGeneratorData(generatorIdentifier);

  const generateNextId = incstr.idGenerator({
    alphabet: "abcefghijklmnopqrstuvwxyzABCEFGHJKLMNOPQRSTUVWXYZ",
  });
  return name => {
    if (!uniqIds[name]) {
      uniqIds[name] = generateNextId();

      saveGeneratorData(generatorIdentifier, uniqIds);
    }

    return uniqIds[name];
  };
};

const localNameIdGenerator = createUniqueIdGenerator("localName");
const componentNameIdGenerator = createUniqueIdGenerator("componentName");

module.exports = (localName, resourcePath) => {
  const componentName = resourcePath.split("/").slice(-2, -1)[0];

  const localId = localNameIdGenerator(localName);
  const componentId = componentNameIdGenerator(componentName);

  return `${componentId}_${localId}`;
};
