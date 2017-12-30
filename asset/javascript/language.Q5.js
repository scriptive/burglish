String.prototype.Q5 = function() {
  return this.replace(/[A-Za-z][a-z\-\']+/g, function($0) {
    if (!h7[$0]) {
      if (QX[$0.toLowerCase()]) {
        return $0.replace(/./g, function($0) {
          return String.fromCharCode($0.charCodeAt(0) + 0x4000);
        });
      } else {
        return $0;
      }
    } else {
      return $0;
    }
  });
};