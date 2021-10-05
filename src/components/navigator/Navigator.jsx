import React from 'react';
import NavItem from '../navitem/NavItem.jsx';

import styles from './Navigator.module.css';

const CIRCLE_DEGS = 360;

const periods = [
    {id: 0, name: ["Quaternary","0mya","2.6mya", 27.69], 
    color: "#ff0000"}, 
    {id: 1, name: ["Neogene","2.6mya", "23mya", 55.38], 
    color: "#ff8000"}, 
    {id: 2, name: ["Paleogene","23mya", "66mya", 83.07], 
    color: "#ffff00"}, 
    {id: 3, name: ["Cretaceous","66mya", "145mya", 110.77], 
    color: "#80ff00"}, 
    {id: 4, name: ["Jurassic","145mya", "201.3mya", 138.45], 
    color: "#00ff00"}, 
    {id: 5, name: ["Triassic","201.3mya", "251.9mya", 166.14], 
    color: "#00ff80"}, 
    {id: 6, name: ["Permian","251.9mya", "298.9mya", 193.83], 
    color: "#00ffff"}, 
    {id: 7, name: ["Pennsylvanian","298.9mya", "323.2mya", 221.52], 
    color: "#0080ff"}, 
    {id: 8, name: ["Mississippian","323.2mya", "358.9mya", 249.21], 
    color: "#0000ff"}, 
    {id: 9, name: ["Devonian","358.9mya", "419.2mya", 276.90], 
    color: "#8000ff"}, 
    {id: 10, name: ["Silurian","419.2mya", "443.8mya", 304.59], 
    color: "#ff00ff"}, 
    {id: 11, name: ["Ordivician","443.8mya", "485.4mya", 332.28], 
    color: "#ff0080"}, 
    {id: 12, name: ["Cambrian","485.4mya", "541mya", 359.97], 
    color: "#ffffff"}
 ];

const Navigator = ({ mobile, selected, select}) => {
    let circleDistance = CIRCLE_DEGS/(periods.length - 1);
    let angle = CIRCLE_DEGS - 90 - ((selected + 1) * circleDistance);
    let mousePos = null;

    const checkMouseDrag = event => {
        if(event.buttons == 1){
            if(!mousePos) {
                mousePos = [event.clientX, event.clientY];
            }
            else{
                let valence = (mousePos[0] - event.clientX + mousePos[1] - event.clientY);
                console.log(valence);
                if(Math.abs(valence) > 30){rotateMenu(valence)}
            }
        }
    }

    function rotateMenu(valence) {
        console.log("selected: ", selected);
        if(valence > 1){
            if(selected >= periods.length-1){
                selected = -1;
            }
            selected++;
            select(selected);
        }
        else if(valence < -1){
            if(selected == 0){
                selected = periods.length-1;
            }
            selected--;
            select(selected);
        }
        console.log(selected, " after", periods[selected].name[0]);
    }

    return(
        <div 
            className = {`${styles.circle} + ${mobile? styles.mobile:""}`}
            onMouseMove = {checkMouseDrag}
            draggable = {false}
            >
            {periods.map((item, ind) => {
                return (
                    <NavItem 
                        period = {item} 
                        selected = {periods[selected].name}
                        select = {select}
                        deg={ind == selected? angle + circleDistance:angle += circleDistance}
                        key = {item.name}/>
                );
            })}
        </div>
    )
}

export default Navigator;