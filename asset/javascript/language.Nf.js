String.prototype.Nf = function() {
  return this.replace(/[䀀-俿]+/g, function($0) {
    return $0.replace(/./g, function($0) {
      return String.fromCharCode($0.charCodeAt(0) - 0x4000);
    });
  });
};