import React from 'react';
import styles from './NavItem.module.css';

const NavItem = ({ period, selected, select, deg}) => {
    const {name, color} = period;
    
    const itemStyle = {
        backgroundColor: color,
        transform: `translate(42vmin) rotate(${-deg}deg)`
    }
    
    const selectedStyle = {
        backgroundColor: color,
        transform: `translate(-50%, -50%) rotate(${-deg}deg)`
    }

    return (
        <div className = {`${styles['circle-item-container']} ${styles.center}`} style = {{transform:`rotate(${deg}deg`}}>
            {selected === name?
            <div
                className = {styles['circle-item-selected']}
                style = {selectedStyle}>
                    <div className={styles.age}>
                        {name[0]}
                        <br/>
                        {console.log(period.id)}
                        {`${name[1]} - ${name[2]}`}
                    </div>
            </div>
            :
            <div
                className = {styles['circle-item']}  
                style={itemStyle}
                onClick={()=>select(period.id)}
            >          
            </div>}
        </div>
        );
}

export default NavItem;