function g9() {
  var hY = $(eText(eSrc)).value;
  var ww = "";
  for (var i = 0; i < hY.length; i++) {
    var code = hY.charCodeAt(i);
    if (code == 10) {
      ww += "\n";
    } else {
      ww += "'" + hY.charCodeAt(i) + "',";
    }
  };
  $(eText(eTar)).value = ww;
};