import { faCoffee, faFacebook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './LeagueDetails.css'
import facebook from '../../Icon/Facebook.png'
import twitter from '../../Icon/Twitter.png'
import youtube from '../../Icon/YouTube.png'

const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [league, setLeague] = useState({});

    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    },[leagueId])
    console.log(league.strBadge);
    const {strLeague, intFormedYear, strSport, strGender, strDescriptionDE, strDescriptionEN} = league;

    let imgLink
    if(strGender !== "Male"){
        imgLink = "https://i.ibb.co/HqqCJtT/female.png"
    }
    else{
        imgLink ="https://i.ibb.co/3pBm9Hg/Rectangle-28.png"
    }
    return (
        <div>
            <div className="home-bg-image">
                <img className="logo" src={league.strBadge} alt="" />
            </div>
            <Container>
                <div className="mt-3 " id="league-info">
                    <div className="text-light p-4 mt-4">
                        <h5>{strLeague}</h5>
                        <p>Founder: {intFormedYear}</p>
                        <p>Sports Type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>

                    <div>
                        <img className = "m-3" src={imgLink} alt="" />
                    </div>

                </div>

                <div className = "mt-5 text-secondary">
                    <small>{strDescriptionEN}</small>
                </div>

                <div className = "social-media-logo text-center m-4">
                    <a href="https://www.facebook.com/">
                        <img src={facebook} alt="" />
                    </a>

                    <a href="https://twitter.com/?lang=en">
                        <img src={twitter} alt="" />
                    </a>

                    <a href="https://www.youtube.com/">
                        <img src={youtube} alt="" />
                    </a>
                    
                </div>

                
            </Container>
        </div>
    );
};

export default LeagueDetails;