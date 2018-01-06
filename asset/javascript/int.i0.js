function i0(e, Qr, QU) {
  if (Qr) {
    gM[e].name = Qr;
    i1(e);
  }
  QU = gM[e].name;
  if (!gM[e].hasOwnProperty('direct')) {
    if (Oa[QU]) {
      if (Oa[QU].wg && Oa[QU].unicode){
        hV(QU);
        $(eOption()).classList.remove('inactive');
        $(eOption()).removeAttribute('data-title');
      } else {
        $(eOption()).classList.add('inactive');
        if (Oa[QU]) $(eOption()).setAttribute('data-title',Oa[QU].QJ+' does not support these functions');
      }
    }
  }
  var style = $(eText(e)).style;
  style.fontFamily = (Oa[QU]? Oa[QU].css.join(",") :'');
  style.fontSize = (Oa[QU] ? Oa[QU].QG : 13) + 'pt';
};