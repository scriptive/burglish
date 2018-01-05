function gx(OT) {
  var wx = $(OT.id),Q4 = wx.value,Qk = wx.parentNode;//w8 = Qk.innerHTML;
  wx.setAttribute('data-autocomplete','off');
  wx.setAttribute('data-burglish','true');

  wx.onfocus= function(event){return onFocus(this);};
  wx.onblur= function(event){return Ki(this);};
  wx.onmouseover = function(event){return NE(this);};
  wx.onmouseup = function(event){return QF(event,this);};
  wx.onkeypress = function(event){return NL(event);};
  wx.onkeyup = function(event){return QF(event,this);};
  wx.onkeydown = function(event){ return Ns(event,this);};
  var inputOptions = $(eOption());
  if (OD[wx.id]["Q_"]){
    inputOptions.style.display = "none";
  }
  for (var x in OD[wx.id]["Qa"]) {
    var li = eCreate("li");
    li.setAttribute('id','chk' + wx.id + x);
    li.setAttribute('class',OD[wx.id]["Qa"][x].class);
    li.setAttribute('data-id',x);
    li.setAttribute('data-title',OD[wx.id]["Qa"][x].text);
    li.onclick = function(e){
      // if (Oa[O4].wg && Oa[O4].unicode);
      // classToggle(e.target,null,!classContain(e.target));
      classToggle(e.target);
      var x = e.target.dataset.id;
      gD(e.target,wx.id,x,OD[wx.id]["Qa"][x]["cb"]);
      e.preventDefault();
    };
    // li.appendChild(doc.createTextNode(OD[wx.id]["Qa"][x].text));
    inputOptions.appendChild(li);
  }
  // for (var x in OD[wx.id]["Qa"]) {
  //   wo += '<input id="chk' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="checkbox" onclick="gD(this,\'' + wx.id + '\',\'' + x + '\',\'' + OD[wx.id]["Qa"][x]["cb"] + '\');">' + OD[wx.id]["Qa"][x].text + '<\/input> ';
  // }
  // wo += '<select ' + OD[wx.id]["wv"] + ' name="Choose Font" id="Nk" onchange="hV(this.value)" style="vertical-align:middle;">';
  // for (var O4 in Oa) {
  //   if (Oa[O4].wg && Oa[O4].unicode) wo += '<option value="' + O4 + '">' + Oa[O4].QJ + '<\/option>';
  // }
  // wo += "<\/select>";
  if (OD[OT.id]["KY"]) {
    var li = eCreate("li");
    li.setAttribute('id','btn' + wx.id + x);
    li.setAttribute('data-title','insert BBCode');
    li.setAttribute('class','icon-insert-bbcode');
    li.onclick = function(){ND();};
    inputOptions.appendChild(li);
  }
  // Syntax correction
  var li = eCreate("li");
  li.setAttribute('id','btn' + wx.id + x+ OD[wx.id]["wv"]);
  li.setAttribute('class','icon-correct-syntax');
  li.onclick = function(){gL();};
  li.appendChild(doc.createTextNode('Correct Syntax!'));
  inputOptions.appendChild(li);

  // if (OD[OT.id]["Nt"] != false) wo += " Burglish v" + gv;

  var divChar= eCreate("div");
  divChar.setAttribute('id',OT.id +'char');
  // divChar.setAttribute('id','hQ');
  // divChar.setAttribute('class','gk dragme');
  divChar.style.display='none';
  Qk.appendChild(divChar);

  var divSuggest = eCreate("div");
  divSuggest.setAttribute('id',OT.id +'suggest');
  divSuggest.setAttribute('class','g7');
  divSuggest.style.display='none';
  Qk.appendChild(divSuggest);

  var divSpan= eCreate("div");
  divSpan.setAttribute('id',OT.id +'span');
  Qk.appendChild(divSpan);



  // Qk.innerHTML = ws;
  $(OT.id).setAttribute('data-autocomplete',OD[OT.id]["K6"]?"off":"on");
  if (doc.selection) {
    wx = $(OT.id);
    wx.select();
    // var range = doc.selection.createRange();
    // wx.Ox = range.boundingHeight;
    wx.Ox = doc.selection.createRange().boundingHeight;
  }
  OD.x = OT.id;
  setTimeout(function() {
    $(OT.id).focus();
    $(OT.id).value = Q4;
  }, 50);
};