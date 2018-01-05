function N8(wx, KV, Kf) {
  var Nu = 0;
  var Nm = eEmpty($(OD.x + "suggest"));
  var Ks = eCreate('div');
  var ol = eCreate('ol');
  // console.log('N8');

  ol.setAttribute('id','col'+OD.x+'0');
  ol.setAttribute('class','gH');

  if (OD[OD.x]) {
    if (OD[OD.x].K3) {
      // var pHelp = eCreate('p');
      // pHelp.appendChild(doc.createTextNode(hO()));
      // pHelp.setAttribute('id','help'+OD.x);
      // pHelp.setAttribute('class','ge');
      // Ks.appendChild(pHelp);
      ol.setAttribute('data-title',hO());
    }
    if (OD[OD.x].gM) {
      if (Oa[OD[OD.x].gM]) {
        ol.style.fontFamily = Oa[OD[OD.x].gM].css.join(",");
      }
    }
  }
  // Ks += '<div id="col' + OD.x + '0" class="gH">';
  if (Kf.length == 0) {
    // var li = eCreate('li');
    // li.appendChild(doc.createTextNode('No Items available'));
    // ol.appendChild(li);
  }
  for (var i = 0; i < Kf.length; i++) {
    // if (i % 10 == 0 && i > 9 && i != Kf.length) {
    //   Ks += '<\/div><div id="col' + OD.x + (i / 10) + '" class="gH">';
    // }
    var liDataEn = (OD[OD.x]["isburmese"])?Kf[i][0]:' - '+ Kf[i][0].replace(KV, KV);
    var li = eCreate('li');

    li.onmousedown =function(){NB();};
    li.onmouseup =function(){Qp();};
    li.onmouseover =function(event){N2(event.target.dataset.fn);};
    li.onmouseout =function(event){event.target.classList.remove('off');};
    li.appendChild(doc.createTextNode(Kf[i][1]));
    li.setAttribute('id','wO'+ OD.x + i);
    li.setAttribute('data-fn',i);
    li.setAttribute('data-en',liDataEn);
    ol.appendChild(li);
  }
  Ks.appendChild(ol);
  Nm.appendChild(Ks);
  if (Kf.length >= 1) {
    wQ(OD.x + "suggest");
    OD[OD.x]["hC"] = -1;
  }
  OD[OD.x]["Km"] = Kf.length;
  if (!w1) {
    var wY = OX(OD.x);
    var w7 = wY[1] - Nm.offsetHeight - 2;
    var KB = 0;
    if (OD[OD.x]["Qe"]) {
      var hA = wx.value.substring(0, wx.selectionEnd).split(/\n/);
      var NY = 1;
      var Kd = $(OD.x + "span");
      Kd.innerHTML = hA[0][0];
      var Qh = 0;
      var QQ = Kd.offsetHeight;
      for (var Oy = 0; Oy < hA.length; Oy++) {
        var gO = 0;
        for (var OM = 0; OM < Math.floor(hA[Oy].length / 200); OM++) {
          Kd.innerHTML = hA[Oy].substring(OM * 200, OM * 200 + 200);
          gO += Kd.offsetWidth;
        }
        Kd.innerHTML = hA[Oy].slice(OM * 200);
        gO += Kd.offsetWidth;
        if (Oy == hA.length - 1) {
          NY += Math.floor(gO / wx.offsetWidth);
          Qh = gO % wx.offsetWidth;
        } else {
          NY += Math.ceil(gO / wx.offsetWidth) || 1;
        }
      }
      if (doc.body.clientHeight + doc.body.scrollTop > wx.offsetTop + wx.offsetHeight + Nm.offsetHeight) {
        var posY = (QQ * NY) - wx.scrollTop;
        KB = wY[1] + posY;
      }
      Nm.style.left = wY[0] + Qh + 8 - wx.scrollLeft;
      if ((Nm.offsetLeft + Nm.offsetWidth) > doc.body.clientWidth) Nm.style.left = doc.body.clientWidth - Nm.offsetWidth;
      Nm.style.top = w7 < 0 ? KB : w7;
    } else if (OD[OD.x]["hc"]) {
      Nm.style.left = wY[0];
      Nm.style.top = wY[1] + wx.offsetHeight;
    } else {
      if (doc.body.clientHeight + doc.body.scrollTop > wx.offsetTop + wx.offsetHeight + Nm.offsetHeight) {
        KB = wY[1] + wx.offsetHeight;
      }
      Nm.style.left = wY[0];
      Nm.style.top = w7 < 0 ? KB : w7;
    }
  }
};