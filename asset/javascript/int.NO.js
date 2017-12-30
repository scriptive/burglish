function NO(e, Qr, QU) {
  var id =eText(e);
  if (Qr) {
    gM[e].name = Qr;
    gf(e);
  }
  QU = gM[e].name;
  if (!gM[e].hasOwnProperty('direct')) {
    if (Oa[QU]) {
      if (Oa[QU].wg && Oa[QU].unicode){
        hV(QU);
        $(app.id.input).classList.remove('inactive');
      } else {
        $(app.id.input).classList.add('inactive');
      }
    }
  }
  $(id).style.fontFamily = (Oa[QU]? Oa[QU].css.join(",") :'');
  $(id).style.fontSize = (Oa[QU] ? Oa[QU].QG : 13) + 'pt';
};