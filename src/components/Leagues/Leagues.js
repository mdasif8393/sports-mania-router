import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './Leagues.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Leagues = (props) => {
    const history = useHistory();

    const {strBadge, strLeague, strSport, idLeague} = props.league;
    return (

        <Container fluid>
        <Card className="cards-display" style={{ width: '18rem' }}>
            <img className="cards-image rounded mx-auto d-block" src={strBadge} alt="" />
            <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Text>
                    <small >Sports type: {strSport}</small>
                </Card.Text>
                <Button onClick={() => history.push(`/league/${idLeague}`)} variant="primary"><FontAwesomeIcon icon={faArrowRight} /> Explore</Button>
            </Card.Body>
        </Card>
        </Container>
        
    );
};

export default Leagues;