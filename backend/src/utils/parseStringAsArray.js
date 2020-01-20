module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.toString().toLowerCase().split(',').map(tech => tech.trim());
}