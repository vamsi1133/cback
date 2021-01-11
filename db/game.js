const { Schema } = require("mongoose");
const mongoose = require("./db")

const GameSchema = ({
    players: [],
    deck: [String],
    deck_no: Number
})

const Game = mongoose.model("Game", GameSchema);


module.exports = Game;