// Your code here
const Dragon = require('./dragon');

class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }

  dontInviteThemOverForDinner() {
    var _name = this.name;
    return this.evilDoings.forEach(function(ele) {
      console.log(`${_name} will ${ele}`)
    })
  }

  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}


module.exports = EvilDragon;