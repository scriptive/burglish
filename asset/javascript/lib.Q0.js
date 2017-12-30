function Q0(hi, Or, OJ, QM, QK) {
  OJ = OJ || '';
  QM = QM || 0;
  QK = QK ? (QK - 1) : 0;
  var h0 = hi.scrollTop;
  var QI = hi.scrollLeft;
  var Nd = hi.textLength;
  var NS = hi.selectionStart - QK;
  var KQ = (hi.selectionEnd || hi.selectionStart) - QK;
  var s1 = (hi.value).substring(0, NS - QM);
  var s2 = (hi.value).substring(NS, KQ);
  var s3 = (hi.value).substring(KQ, Nd);
  hi.value = s1 + Or + (OJ ? s2 : '') + OJ + s3;
  hi.selectionStart = NS + (Or.length - QM) + QK;
  hi.selectionEnd = hi.selectionStart;
  hi.scrollTop = h0;
  hi.scrollLeft = QI;
  return false;
};