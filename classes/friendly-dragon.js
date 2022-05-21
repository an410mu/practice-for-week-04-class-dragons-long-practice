// Your code here
const Dragon = require('./dragon');

// const FriendlyDragon = function(name, color, lifeGoals, friend) {
//   Dragon.call(this, name, color);
//   this.lifeGoals = lifeGoals;
//   this.friend = friend;
// }
// //link with parent
// FriendlyDragon.prototype = Object.create(Dragon.prototype);

// FriendlyDragon.prototype.hasLifeGoals = function() {
//   this.lifeGoals.forEach(function(ele) {
//     console.log(`${this.name} likes to ${ele}`);
//   });
// };

// FriendlyDragon.prototype.helpsPeople = function() {
//   console.log(`${this.name} helps their friend ${this.friend}`);
// };

class FriendlyDragon extends Dragon {
  constructor (name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  };

  hasLifeGoals() {
    var _name = this.name;
    return this.lifeGoals.forEach(function(ele) {
          console.log(`${_name} likes to ${ele}`);
         });
  };

  helpsPeople () {
    return `${this.name} helps their friend ${this.friend}`;
  };
}



// const puff = new FriendlyDragon(
//   "Puff",
//   "green",
//   [
//     "live by the sea",
//     "frolick in the autumn mist",
//     "help small children"
//   ],
//   "Jackie Paper"
// );
// console.log(puff);
// console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
//puff.hasLifeGoals();
// console.log(puff.helpsPeople());


module.exports = FriendlyDragon;