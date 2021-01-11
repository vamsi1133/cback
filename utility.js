
class Deck {
    constructor() {
        this.deck = ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
            'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
            'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC',
            'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD'
        ];
    }

    shuffledDeck = () => {
        let x = []
        let y = this.deck;
        let z = 52;
        while (z > 0) {
            x.push(y.splice(Math.floor(Math.random() * z), 1)[0])
            z--;
        }
        return x;
    }
}

module.exports = Deck


