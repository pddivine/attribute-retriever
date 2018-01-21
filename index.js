module.exports = attributeRetriever;

function attributeRetriever(path) {
  if (typeof path !== 'string') {
    throw `Invalid argument: 'path' must be of type 'string'.`;
  }

  const pathElements = path.split('.');

  let attribute = undefined;

  const len = pathElements.length;
  for (let i = 0; i < len; ++i) {
    if (i === 0) {
        attribute = eval(pathElements[i]);
        continue;  
    }

    console.log('pathElements', pathElements[i])
    attribute = attribute[pathElements[i]];
    console.log('attr', attribute)
    
    if (attribute === undefined) { break; }

    // Skip type validation on final element
    if (i === len - 1) { continue; }

    // Ensure attribute is of type 'object'
    const isObject = attribute && typeof attribute === 'object' && !Array.isArray(attribute);
    if (!isObject) {
      throw `Middle chain attribute '${pathElements[i]}' provided valued '${JSON.stringify(attribute)}', not of required type 'object'.`
    }

  }

  return attribute;

}