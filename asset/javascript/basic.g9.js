function g9() {
  var hY = $(eText(app.id.source)).value;
  var ww = "";
  for (var i = 0; i < hY.length; i++) {
    var code = hY.charCodeAt(i);
    if (code == 10) {
      ww += "\n";
    } else {
      ww += "'" + hY.charCodeAt(i) + "',";
    }
  };
  $(eText(app.id.target)).value = ww;
};