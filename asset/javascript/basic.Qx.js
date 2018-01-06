function Qx() {
  var wq = $(eText(eSrc)).value;
  self.status = gM[eSrc].name + " -> " + gM[eTar].name;
  $(eText(eTar)).value = wq.Ng(gM[eSrc].name, gM[eTar].name);
};