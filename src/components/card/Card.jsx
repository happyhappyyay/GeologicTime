import React, {useState, useEffect} from 'react';
import Navigator from '../navigator/Navigator.jsx'
import CardInfo from '../cardinfo/CardInfo.jsx';

import styles from './Card.module.css';


const Card = () => {
    const [matches, setMatches] = useState(false);
    const [isHidden, setHidden] = useState(true);
    const [selected, setSelected] = useState(0);
    const media = window.matchMedia("(min-width: 600px)");

    function changeSelection(period){
        setSelected(period);
    }

    function togglePeriodMenu(hidden){
        setHidden(hidden);
    }

    useEffect(() => {
        
        if(media.matches != matches){
            setMatches(media.matches);
        }

        const listener = () => {
            setMatches(media.matches);
        };

        media.addEventListener('change',listener);
        return () => media.removeEventListener('change',listener);
    },[matches,media]);

    return(
        <div className = {styles.card} >
            <div className = {isHidden? styles.pause: ''}>
            <Navigator 
                mobile={!matches} 
                selected={selected}
                select={changeSelection}/>
            <CardInfo/>
            </div>
        </div>
    );
}

export default Card;