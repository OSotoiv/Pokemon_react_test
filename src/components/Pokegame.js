import React from "react";
import Pokedex from "./Pokedex";
import pokemon from './Pokemon' //array of pokemon

const Pokegame = () => {
    // shuffle the pokemon array to randomize the order
    const shuffledPokemon = pokemon.sort(() => Math.random() - 0.5);

    // split the shuffled array into two hands of 4 cards each
    const hand1 = shuffledPokemon.slice(0, 4);
    const hand2 = shuffledPokemon.slice(4);

    // calculate the total experience for each hand
    const totalExp1 = hand1.reduce((total, p) => total + p.base_experience, 0);
    const totalExp2 = hand2.reduce((total, p) => total + p.base_experience, 0);

    // determine the winning hand based on total experience
    const winner = totalExp1 > totalExp2 ? "Hand 1" : "Hand 2";

    return (
        <div>
            {winner === "Hand 1" ? <h2>{winner} Wins!</h2> : ""}
            <Pokedex pokemon={hand1} totalExp={totalExp1} isWinner={winner === "Hand 1"} />
            {winner === "Hand 2" ? <h2>{winner} Wins!</h2> : ""}
            <Pokedex pokemon={hand2} totalExp={totalExp2} isWinner={winner === "Hand 2"} />
        </div>
    );
};

export default Pokegame;