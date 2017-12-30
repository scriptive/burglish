var gM = {};

function NO(OT, Qr, QU) {
  var OO = '';
  if ($(OT.id + 'Text')) OO = wi($(OT.id + 'Text').value);
  if (Qr) OT.value = Qr;
  gM[OT.id] = {};
  gM[OT.id].QJ = OT.value;
  gM[OT.id].name = OT.value.replace("-", "_").replace(" ", "_");
  $(OT.id + "Area").innerHTML = '<textarea value="' + OT.value + '" id="' + OT.id + 'Text" cols="50" rows="20" style="font-family:' + (Oa[gM[OT.id].name] ? Oa[gM[OT.id].name].css.join(",") : OT.value) + ';font-size:' + (Oa[gM[OT.id].name] ? Oa[gM[OT.id].name].QG : 12) + 'pt;width:400px;height:250px" ' + (QU ? QU : '') + '></textarea>';
  $(OT.id + 'Text').value = OO;
};

function gf(id) {
  var Oc = '<select name="Choose Font" id="' + id + '" onchange="return NO(this);"><option value="Arial" selected>-</option>';
  for (var wO in Oa) {
    if (Oa[wO]['wg']) Oc += '<option value="' + wO + '">' + Oa[wO]['QJ'] + " " + Oa[wO]['wW'] + '<\/option>'
  }
  Oc += '</select>';
  return Oc;
};
gJ.int = true;