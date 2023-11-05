class DiceHandler {
    constructor(numberOfDice) {
        this.dice = [];
        this.numDice = numberOfDice;
        this.#createDice(numberOfDice);
    }

    //sets up the dice for the game to use
    #createDice() {
        for (let i = 0; i < this.numDice; i++)
            this.dice.push(new Dice(null, 'die-img' + (i + 1)));
    }

    //clears the dice
    resetDice() {
        for (let i = 0; i < this.numDice; i++)
            this.dice[i].reset();
    }

    //returns a list of the dice
    getDice()
    {
        return this.dice;
    }


    /**
     * rolls all the dice
     * @param poe
     */
    async rollDice() {
        //setting up a timeout limit, so that if the server is not online,
        ///or is otherwise unreachable, the program will use the built in roll method instead, in a timely manner
        const controller = new AbortController();
        const timeoutId = setTimeout(()=> controller.abort(), 200);

        //this is the part that actually calls the server.
        await fetch(diceEndPoint, {signal:controller.signal})
            .then(response => response.text())
            .then(data => {
                let values = data.replace('[', '') //preparing the data to be used on the dice
                    .replace(']', '')
                    .split(',')
                for (let i = 0; i < this.numDice; i++) {
                    this.dice[i].setNumber(Number(values[i])); //set the number
                }
            })
            .catch(e => {
                //this part is if the server is unreachable.
                console.log('Error from fetch: \n' + e)
                for (let i = 0; i < this.numDice; i++)
                    this.dice[i].roll(); //any errors getting server, will default to rolling "offline"
            });
    }




}



