var module = (function () {

    var players = [];

    return {
        add: function (name) {
            players.push(name);
        },
        get: function () {
            return players;
        }
    }

})();

module.add('Cristiano Ronaldo');
module.add('Lionel Messi');
module.add('Gareth Bale');
var players =  module.get();

console.log(players);
//['Cristiano Ronaldo', 'Lionel Messi', 'Gareth Bale']