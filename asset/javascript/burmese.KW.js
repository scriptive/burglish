function KW(chr) {
  var O1 = wC(chr);
  if (O1 < 33) {
    return 1;
  } else if (O1 < 66 || (O1 > 195 && O1 < 202)) {
    return 2;
  } else if (O1 < 76) {
    return 3;
  } else {
    return 0;
  }
};