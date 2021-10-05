import React from 'react';
import NavItem from '../navitem/NavItem.jsx';
import SingleNav from '../singlenav/SingleNav.jsx';

import styles from './Nav.module.css';

const items = ['Loo','bath','cobbler','glasseyerr', 'about'];

const Nav = ({ hidden, media }) => {
    return(
    <>
        { media?
        (<ol> 
            {items.map((item)=>{
                    return (
                    <li key={item}>
                        <NavItem text={item}/>
                    </li>
                    )
                })
            }
        </ol>
        ):
        (
            <SingleNav items = {items}/>
        )
        }
    </>
    );
}

export default Nav;