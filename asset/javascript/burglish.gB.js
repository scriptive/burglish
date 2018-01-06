function gB(wx, Oi, wZ) {
  if (OD[OD.x]["Q7"] != (/[က-အ]/.test(Oi) ? "M" : Oi) + wZ) {
    if (/[ေ]/.test(wZ) && /[က-အ]/.test(Oi) || /[ြ]/.test(wZ) && /[က-အ]/.test(Oi) || /[ေ]/.test(wZ) && /[ြ]/.test(Oi)) {
      OD[OD.x]["Q7"] = (/[က-အ]/.test(Oi) ? "M" : Oi) + wZ;
      KR(wx, Oi + wZ, "", wZ.length);
      return true;
    }
  }
  OD[OD.x]["Q7"] = '';
  return false;
};