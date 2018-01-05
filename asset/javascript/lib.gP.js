function gP(evt) {
  if (!evt) {
    return doc.onmousemove = false;
  }
  var gs = QW ? evt.target : event.srcElement;
  var N7 = w1 ? "BODY" : "HTML";
  while (gs.tagName != N7 && !/dragme/.test(gs.className)) {
    gs = QW ? gs.parentNode : gs.parentElement;
  }
  if (/dragme/.test(gs.className)) {
    gR = true;
    g4 = gs;
    tx = parseInt(g4.style.left + 0);
    ty = parseInt(g4.style.top + 0);
    N5 = QW ? evt.clientX : event.clientX;
    Nr = QW ? evt.clientY : event.clientY;
    doc.onmousemove = Qw;
    return false;
  }
};




// function gP(evt) {
//   // console.log(evt);
//   if (!evt) {
//     return doc.onmousemove = false;
//   }
//   var gs = QW ? evt.target : event.srcElement;
//   var N7 = w1 ? "BODY" : "HTML";
//   while (gs.tagName != N7 && !/dragme/.test(gs.className)) {
//     gs = QW ? gs.parentNode : gs.parentElement;
//   }
//   if (/dragme/.test(gs.className)) {
//     gR = true;
//     g4 = gs;
//     tx = parseInt(g4.style.left + 0);
//     ty = parseInt(g4.style.top + 0);
//     N5 = QW ? evt.clientX : event.clientX;
//     Nr = QW ? evt.clientY : event.clientY;
//     doc.onmousemove = Qw;
//     return false;
//   }
// };