const game = require('./db/game');
const Deck = require('./utility')

exports.players = (req, res) => {
    const plr = req.body.players;
    const deck = new Deck();
    const player_profiles = [];
    plr.map((x, i) => player_profiles.push({ name: x, id: `P${i}`, in: 0, out: 0 }))
    const players = new game({
        players: player_profiles,
        deck: deck.shuffledDeck(),
        deck_no: 1
    })
    players.save()
        .then(x => { console.log(x); res.send({ game_id: x._id }).status(200) })
}

exports.getCards = (req, res) => {
    const game_id = req.query.game_id;
    game.findById(game_id)
        .then(x => {
            let latest_cards = x.deck;
            const pla = []
            x.players.map(player => {
                let c1 = latest_cards.pop(); let c2 = latest_cards.pop();
                pla.push({ name: player.name, id: player.id, in: player.in, out: player.out, cards: [c1, c2] })
            })
            if (latest_cards.length <= 2 * x.players.length) {
                let deck1 = new Deck();
                latest_cards = deck1.shuffledDeck()
                game.findByIdAndUpdate(game_id, { deck: latest_cards, $inc: { deck_no: 1 } })
                    .then(y => res.send({ players: pla, deck_no: x.deck_no, cards_left: latest_cards.length })
                    )
            }
            else {
                game.findByIdAndUpdate(game_id, { deck: latest_cards })
                    .then(y => res.send({ players: pla, deck_no: x.deck_no, cards_left: latest_cards.length })
                    )
            }

        })
}