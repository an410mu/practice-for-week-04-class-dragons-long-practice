// Your code here

//ES5
// const Dragon = function (name, color) {
//   this.name = name;
//   this.color = color;
// }

// Dragon.prototype.breathesFire = function () {
//   return `${this.name} breathes fire everywhere! BURN!!!!`
// }

// Dragon.getDragons = function(...dragons) {
//       this._dragons = dragons;
//     return this._dragons.map(function(ele) {
//       return ele.name;
//     });
//  }

class Dragon {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    this._dragons = dragons;
    return this._dragons.map(function(ele) {
      return ele.name;
    });
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}