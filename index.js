function findMatching(driversArray, query) {
    return driversArray.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  function fuzzyMatch(driversArray, query) {
    return driversArray.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
 function matchName(driversArray, query) {
    return driversArray.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }
  
  module.exports = { findMatching, fuzzyMatch, matchName };
  