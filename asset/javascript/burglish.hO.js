function hO() {
  // if (!K3[hz]) {
  //   K3[hz] = K3["Myanmar3"];
  // }
  if (!K3[hz]) {
    K3[hz] = K3["Myanmar3"].join('\f').Ng("Myanmar3", hz, {
      "Qv": true
    }).split("\f");
  }
  return K3[hz][Math.round(Math.random() * (K3[hz].length - 1))];
};