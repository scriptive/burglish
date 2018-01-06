function gD(wx, Oz, O4, O7) {
  if (classContain(wx)) {
    if (O4 == "K6") {
      OD[Oz]["Qo"] = false;
    } else if (O4 == "Qo") {
      OD[Oz]["K6"] = false;
    }
  }
  OD[Oz][O4] = classContain(wx);
  gU(Oz);
  // if (OD[Oz]["Qo"] && O4 == "Qo") hV($("Nk").value);
  if (OD[Oz]["Qo"] && O4 == "Qo") {
    hV(gM[eSrc].name);
  }
  // $(Oz)["autocomplete"] = OD[Oz]["K6"] ? "Off" : "On";
  $(Oz).setAttribute('data-autocomplete',OD[Oz]["K6"] ? "off" : "on");
  if (Ku(O7)) eval(O7)(Oz, O4, true);
  return false;
};
