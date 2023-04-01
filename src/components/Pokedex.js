import React from "react";
import Pokecard from './Pokecard' //componenet to make cards
import '../styles/Pokecard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Pokedex = ({ pokemon, totalExp, isWinner }) => {
    return (
        <Container style={{ marginTop: "20px" }} fluid="md">
            <Row>
                <p className={isWinner ? 'winningXp' : 'losingXP'}>TotalXP: {totalExp}</p>
                {pokemon.map(p => <Pokecard key={p.id} card={p} />)}
            </Row>
        </Container >
    )
}

export default Pokedex