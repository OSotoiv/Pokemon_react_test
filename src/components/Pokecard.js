import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Pokecard = ({ card }) => {
    const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`
    return (
        <Col sm={4} md={3} key={card.id} style={{ marginBottom: '5px' }}>
            <Card style={{ width: '10rem', height: '18rem' }}>
                <Card.Img variant="top" src={baseURL} />
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                        Type: {card.type}
                    </Card.Text>
                    <Card.Text>
                        Level: {card.base_experience}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Pokecard