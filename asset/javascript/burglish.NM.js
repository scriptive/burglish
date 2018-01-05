function NM(Oz, O4, OW) {
  // NOTE: Na
  var id= Oz+'char', container = $(id);
  if (!container) return;
  // console.log(container.firstChild);
  if (container.firstChild) {
    var ol = container.firstChild,li;
    ol.innerHTML='';
  } else {
    // container.innerHTML='';
    var ol = eCreate("ol"),li;
    container.appendChild(ol);
  }
  ol.setAttribute('class','gk dragme');
  // ol.setAttribute('id','dragme');
  ol.setAttribute('data-title','Dragme');

  // var dragging = false;
  // var x, y, Ox, Oy, current;
  //
  // // var grabber = doc.getElementById("dragme");
  // ol.onmousedown = function (ev) {
  //   ev =document.body;
  //    // ev = ev || window.event;
  //    var target = ev.target || ev.srcElement;
  //    // current = target.parentNode;
  //    current = document.body;
  //    dragging = true;
  //    x = ev.clientX;
  //    y = ev.clientY;
  //    Ox = current.offsetLeft;
  //    Oy = current.offsetTop;
  //    console.log(current.tagName);
  // };
  //
  // document.onmousemove = function (ev) {
  //    ev = ev || window.event;
  //    if (dragging === true) {
  //        var Sx = parseFloat(ev.clientX) - x + Ox;
  // var Sy = parseFloat(ev.clientY) - y + Oy;
  //        ev.target.style.left = Math.min(Math.max(Sx, Math.min(document.body.offsetWidth - Sx, 0)), document.body.offsetWidth - current.offsetWidth) + "px";
  //
  //        ev.target.style.top = Math.min(Math.max(Sy, Math.min(document.body.offsetHeight - Sy, 0)), document.body.offsetHeight - current.offsetHeight) + "px";
  //    }
  // };
  //
  // ol.onmouseup = function (ev) {
  //    ev = ev || window.event;
  //    dragging = false;
  // };

  // ol.setAttribute('id','Na');
  if (hz == "Zawgyi") {
    for (var i = 0; i < w2.length; i++) {
      li=eCreate('li');
      li.setAttribute('data-fn',w2[i].replace(/[\-\s]+/g, ''));
      li.appendChild(doc.createTextNode(w2[i]));
      li.onclick=function(){Os(this.dataset.fn);}
      ol.appendChild(li);
    }
  } else if (Oa[hz].unicode == 51) {
    for (var i = 0; i < w_.length; i++) {
      li=eCreate('li');
      li.setAttribute('data-fn',w_[i].replace(/[\-\s\w()]+/g, ''));
      li.appendChild(doc.createTextNode(w_[i]));
      li.onclick=function(){Os(this.dataset.fn);}
      ol.appendChild(li);
    }
  } else {
    for (var i = 0; i < Oa[hz].OE.length - 16; i++) {
      if (!Oa[hz].OE[i]) continue;
      var hr = hT(Oa[hz].OE[i]);
      li=eCreate('li');
      li.setAttribute('data-fn',((i >= 79 && i <= 98) ? '--' : '') + hr);
      li.appendChild(doc.createTextNode(hr));
      li.onclick=function(){Os(this.dataset.fn);}
      ol.appendChild(li);
    }
  }
  if (Oa[hz])ol.style.fontFamily = Oa[hz].css.join(",");
  // ol.className = Oa[hz].QJ;
  // NOTE: hQ
  if (OW) Ne(id, classContain("chk" + Oz + O4));
  return false;
};