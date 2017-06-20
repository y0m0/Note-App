(function(exports) {
  function Assert() {
    this.var;
  };

  Assert.prototype.isTrue = function(assertionToCheck, testName) {
      if (!assertionToCheck) {
        throw new Error ("Assertion failed:" + assertionToCheck + " is not truthy");
      } else {
        console.log(testName + " test passed!");
      }
    }

  Assert.prototype.isFalse = function(assertionToCheck, testName) {
      if (assertionToCheck) {
        throw new Error ("Assertion failed:" + assertionToCheck + " is not falsy");
      } else {
        console.log(testName + " test passed!");
      }  
    }

  exports.Assert = Assert;
})(this);
