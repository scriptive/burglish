function gf(id) {
  if ($(id).innerHTML === "") {
    var parents = eCreate("li");
    var p = eCreate("p");
    var ol = eCreate("ol");
    for (var wO in Oa) {
      if (Oa[wO]['wg']) {
        var li = eCreate("li");
        li.setAttribute("id",wO);
        if (Oa[wO].wg && Oa[wO].unicode)li.classList.add('unicode');
        if (wO == gM[id].name)li.classList.add('active');
        li.dataset.detail = Oa[wO]['wW'];
        li.appendChild(doc.createTextNode(Oa[wO].QJ));
        ol.appendChild(li);
      }
    }
    p.appendChild(doc.createTextNode(gM[id].name));
    ol.addEventListener("click", function(e){
      var el = e.target || e.srcElement;
      var elP =  el.parentElement;
      if (el.dataset.detail && !classContain(el)) {
        while(elP.getElementsByClassName('active').length > 0){
          elP.getElementsByClassName('active')[0].classList.remove('active');
        }
        el.classList.add('active');
        gM[id].name = el.id;
        p.innerHTML=el.innerHTML;
        NO(id);
      }
      // direct
      if (gM[id].hasOwnProperty('direct')) {
        Qx();
      }
    });
    parents.appendChild(p);
    parents.appendChild(ol);
    $(id).appendChild(parents);
  } else {
    $(id).firstChild.firstChild.innerHTML=gM[id].name;
  }
};

// for (var O4 in Oa) {
//   if (Oa[O4].wg && Oa[O4].unicode) wo += '<option value="' + O4 + '">' + Oa[O4].QJ + '<\/option>';
// }