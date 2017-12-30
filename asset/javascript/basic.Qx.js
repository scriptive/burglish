function Qx() {
  eText(app.id.source)
  var wq = $(eText(app.id.source)).value;
  self.status = gM[app.id.source].name + " -> " + gM[app.id.target].name;
  $(eText(app.id.target)).value = wq.Ng(gM[app.id.source].name, gM[app.id.target].name);
};