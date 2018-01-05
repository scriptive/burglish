function Qw(evt) {
  if (gR) {
    var eX = QW?evt.clientX:event.clientX;
    var eY = QW?evt.clientY:event.clientY;
    var eLeft = tx + eX - N5;
    var eTop = ty + eY - Nr;
    // g4.style.left = (QW?tx + evt.clientX - N5:tx + event.clientX - N5)+'px';
    // g4.style.top = (QW?ty + evt.clientY - Nr:ty + event.clientY - Nr)+'px';
    // var h=Math.max(window.innerHeight, doc.body.clientHeight);
    // var w=Math.max(window.innerWidth, doc.body.clientWidth);
    var eW =g4.offsetWidth+60;
    var eH =g4.offsetHeight+eTop;
    var w=Math.max(win.innerWidth, doc.body.offsetWidth)-eW;
    var h=Math.max(win.innerHeight, doc.body.offsetHeight)-eH;
    if (eLeft < w) g4.style.left = Math.min(eLeft,w+tx)+'px';
    if (eTop < h ) g4.style.top =  Math.min(eTop,h+ty)+'px';
    return false;
  }
};