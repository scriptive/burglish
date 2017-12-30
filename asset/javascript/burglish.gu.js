function gu(Oz) {
  // console.log(Oz,'gu');
  // console.log(OD[Oz]["Qa"]);
  for (var x in OD[Oz]["Qa"]) {
    // console.log(x);
    // console.log(OD[Oz][x]);
    $('chk' + Oz + x).classList.toggle('active',OD[Oz][x]);
    // $('chk' + Oz + x).classList.toggle('active',OD[Oz]["Qa"][x]==true);
  }
  return false;
};