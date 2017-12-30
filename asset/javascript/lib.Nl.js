function Nl(gz, QY, Nq) {
  if (gz) {
    if ($('loading')) {
      wQ("loading");
    } else {
      var h6 = eCreate("div");
      h6.id = "loading";
      h6.innerHTML = '<div>' + (Nq || 'Loading...') + '</div>';
      doc.body.appendChild(h6);
    }
    setTimeout(eval(QY), 100);
  } else {
    Kx("loading");
  }
};