function dragme() {
  var dragging = false;
  var x, y, Ox, Oy, current;

  var grabber = doc.getElementById("dragme");
  grabber.onmousedown = function (ev) {
     ev = ev || window.event;
     var target = ev.target || ev.srcElement;
     current = target.parentNode;
     dragging = true;
     x = ev.clientX;
     y = ev.clientY;
     Ox = current.offsetLeft;
     Oy = current.offsetTop;
  };

  document.onmousemove = function (ev) {
     ev = ev || window.event;
     if (dragging === true) {
         var Sx = parseFloat(ev.clientX) - x + Ox;
  var Sy = parseFloat(ev.clientY) - y + Oy;
         current.style.left = Math.min(Math.max(Sx, Math.min(document.body.offsetWidth - Sx, 0)), document.body.offsetWidth - current.offsetWidth) + "px";

         current.style.top = Math.min(Math.max(Sy, Math.min(document.body.offsetHeight - Sy, 0)), document.body.offsetHeight - current.offsetHeight) + "px";
     }
  };

  grabber.onmouseup = function (ev) {
     ev = ev || window.event;
     dragging = false;
  };
}
