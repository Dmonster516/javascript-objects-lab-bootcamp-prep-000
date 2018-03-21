var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  newObj = Object.assign({}, object, object[key], value);
  return newObj;
}

