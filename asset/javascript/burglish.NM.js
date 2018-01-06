function NM(Oz, O4, OW) {
  // NOTE: Na
  var id= Oz+'char', container = $(id);
  if (!container) return;
  if (container.firstChild) {
    var ol = container.firstChild,li;
    ol.innerHTML='';
  } else {
    // container.innerHTML='';
    var ol = eCreate("ol"),li;
    container.appendChild(ol);
    ol.setAttribute('class','gk dragme');
    // ol.setAttribute('id','dragme');
    ol.setAttribute('data-title','Dragme');
    // ol.setAttribute('id','Na');
  }
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