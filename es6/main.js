//------ main.js ------
var module = require('./es6-module-pattern');

module.add('Cristiano Ronaldo');
module.add('Lionel Messi');
module.add('Gareth Bale');
var players =  module.get();
console.log(players);
//['Cristiano Ronaldo', 'Lionel Messi', 'Gareth Bale']