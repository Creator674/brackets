module.exports = function check(str, bracketsConfig) {
  for (var i = str.length ; i>=0 ; i--){
    for (var k = 0; k < bracketsConfig.length; k++){
      var same = bracketsConfig[k].join('');
      if (str.includes(same)) {
        str = str.replace(same,'');
      }
    }
  }
  return str === "";
}

