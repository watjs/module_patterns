var players = [];

function add(name) {
    players.push(name);
}

function get() {
    return players;
}

module.exports = {
    add: add,
    get: get
};