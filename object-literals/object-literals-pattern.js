var module = {
    players: [],
    add: function (name) {
        this.players.push(name);
    }
};

module.add('Cristiano Ronaldo');
module.add('Lionel Messi');
module.add('Gareth Bale');

var players =  module.players;

console.log(players);