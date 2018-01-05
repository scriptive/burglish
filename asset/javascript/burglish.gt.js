function gt(OT) {
  if (document.selection) {
    var range = document.selection.createRange();
    $(OT.id + "suggest").style.top = range.offsetTop + OT.Ox;
    $(OT.id + "suggest").style.left = range.offsetLeft;
  }
};