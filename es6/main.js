//------ main.js ------
var module = require('./es6-module-pattern');

module.add('Cristiano Ronaldo');
module.add('Lionel Messi');
module.add('Gareth Bale');
var players =  module.get();
console.log(players);

module.get = function () {
    return 'get method has been modified';
};

players =  module.get();
console.log(players);