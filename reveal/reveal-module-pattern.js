var module = (function () {

    var players = [];

    return {
        add: add,
        get: get
    };

    function add(name) {
        players.push(name);
    }

    function get() {
        return players;
    }

})();

module.add('Cristiano Ronaldo');
module.add('Lionel Messi');
module.add('Gareth Bale');
var players =  module.get();

console.log(players);
//['Cristiano Ronaldo', 'Lionel Messi', 'Gareth Bale']