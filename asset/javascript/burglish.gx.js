function gx(OT) {
  var wx = $(OT.id);

  wx.setAttribute('data-autocomplete','off');
  wx.setAttribute('data-burglish','true');
  var Q4 = wx.value;
  var Qk = wx.parentNode;
  var w8 = Qk.innerHTML;

  wx.onfocus= function(event){
    return onFocus(this);
  };
  wx.onblur= function(event){
    return Ki(this);
  };
  wx.onmouseover = function(event){
    return NE(this);
  };
  wx.onmouseup = function(event){
    return QF(event,this);
  };
  wx.onkeypress = function(event){
    return NL(event);
  };
  wx.onkeyup = function(event){
    return QF(event,this);
  };
  wx.onkeydown = function(event){
    return Ns(event,this);
  };
  var inputOptions = $(eOption());
  if (OD[wx.id]["Q_"]){
    inputOptions.style.display = "none";
  }
  // wo = '<span style="display:' + (OD[wx.id]["Q_"] ? "none" : "") + ';color:#000;font-size:90%;">';
  for (var x in OD[wx.id]["Qa"]) {
    var li = eCreate("li");
    li.setAttribute('id','chk' + wx.id + x);
    li.setAttribute('class',OD[wx.id]["Qa"][x].class);
    li.setAttribute('data-id',x);
    li.setAttribute('data-title',OD[wx.id]["Qa"][x].text);
    li.onclick = function(e){
      e.target.classList.toggle('active',!e.target.classList.contains('active'));
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
    li.onclick = function(e){
      ND();
    };
    inputOptions.appendChild(li);
  }
  // if (OD[OT.id]["KY"]) {
  //   wo += ' <input id="btn' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="button" onclick="ND();" value="Add Font BBCode"><\/input> ';
  // }
  // Syntax correction
  var li = eCreate("li");
  li.setAttribute('id','btn' + wx.id + x+ OD[wx.id]["wv"]);
  li.setAttribute('class','icon-correct-syntax');
  li.onclick = function(e){
    gL();
  };
  li.appendChild(doc.createTextNode('Correct Syntax!'));
  inputOptions.appendChild(li);

  // wo += ' <input id="btn' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="button" onclick="gL();" value="Correct Syntax!"><\/input> ';
  // if (OD[OT.id]["Nt"] != false) wo += " Burglish v" + gv;
  // wo += "<\/span>";
  // if ($("Qi")) {
  //   $("Qi").innerHTML = wo;
  // } else {
  //   ws += "<br>" + wo;
  // }

  // wo = '';
  // if ($("hQ")) {
  //   $("hQ").innerHTML = wo;
  // } else {
  //   ws += '<br><div id="hQ" class="gk dragme" style="display:none;"><div>Draggable Box:You can move this anywhere<\/div><div id="Na">' + wo + '</div><div>This idea is inspired from<a href="http://saturngod.net/">SaturnGod<\/a>\'s<a href="http://www.mysteryzillion.org/project/webtext/">Web Text Editor<\/a><\/div><\/div><br>';
  // }
  // ws += '<span id="' + OT.id + 'drop"' + ' class="g7">' + '</span>';
  // ws += '<br><span id="' + OT.id + 'span"' + ' style="border:0;padding:0;margin:0;width:0;height:0;visibility:hidden;font-family:Zawgyi-One,Arial,Sans-Serif;" visible="false">' + '</span>';

  var divDrop = eCreate("div");
  divDrop.setAttribute('id',OT.id +'drop');
  divDrop.setAttribute('class','g7');
  divDrop.style.display='none';
  Qk.appendChild(divDrop);

  var divSpan= eCreate("div");
  divSpan.setAttribute('id',OT.id +'span');
  Qk.appendChild(divSpan);

  var divDrag= eCreate("div"), divDragChild= eCreate("ol");
  divDrag.setAttribute('id','hQ');
  divDrag.setAttribute('class','gk dragme');
  divDrag.style.display='none';

  divDragChild.setAttribute('id','Na');
  divDragChild.setAttribute('data-title','Draggable Box:You can move this anywhere');
  divDrag.appendChild(divDragChild);
  Qk.appendChild(divDrag);


  // Qk.innerHTML = ws;
  $(OT.id).setAttribute('data-autocomplete',OD[OT.id]["K6"] ? "off" : "on");
  // $(OT.id)["autocomplete"] = OD[OT.id]["K6"] ? "Off" : "On";
  if (doc.selection) {
    wx = $(OT.id);
    wx.select();
    var range = doc.selection.createRange();
    wx.Ox = range.boundingHeight;
  }
  OD.x = OT.id;
  setTimeout(function() {
    $(OT.id).focus();
    $(OT.id).value = Q4;
  }, 50);
};