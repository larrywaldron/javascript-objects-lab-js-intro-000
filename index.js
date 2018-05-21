var recipes = {}

function updaterecipeobject(object, key,value) {
  return object.assign( {}, object, {key: value})

}
