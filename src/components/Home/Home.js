import React, { useEffect, useState } from 'react';
import './Home.css'
import Background from '../../Photo/backgroung.jpg';
import Leagues from '../Leagues/Leagues';
import { Button } from 'react-bootstrap';



const Home = () => {
    
      const [leagues, setLeagues] = useState([]);

      useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`)
        .then( res => res.json() )
        .then(data => setLeagues(data.countrys))
      },[])


    return (
        <div>
            <div className="home-bg-image ">
                <h1>Sports Mania</h1>
            </div>

            <div>
                <div className="leagues-container">
                
                    {
                        leagues.map( (league) => <Leagues league={league}></Leagues> )
                    }
                    
                </div>
            </div>
        </div>
        
        
    );
};

export default Home;