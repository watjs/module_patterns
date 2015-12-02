var module = (function () {

    var players = [];

    var publicAPI = {
        add: function (name) {
            players.push(name);
        },
        get: function () {
            return players;
        }
    };

    return publicAPI;

})();

module.add('Cristiano Ronaldo');
module.add('Lionel Messi');
module.add('Gareth Bale');
var players =  module.get();

console.log(players);
//['Cristiano Ronaldo', 'Lionel Messi', 'Gareth Bale']

module.get = function () {
  return 'get method has been modified';
};

players =  module.get();
console.log(players);
// get method has been modified