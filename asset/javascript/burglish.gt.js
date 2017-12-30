function gt(OT) {
  if (doc.selection) {
    var range = doc.selection.createRange();
    $(OT.id + "drop").style.top = range.offsetTop + OT.Ox;
    $(OT.id + "drop").style.left = range.offsetLeft;
  }
};