import React from "react";
import {NavProps} from "./types";
import styles from './nav.module.scss'
import cn from 'classnames'


const Nav: React.FC<NavProps> = ({pages, activePage, setActivePage}) => {
    return (
        <ul className={styles.navContainer}>
            {pages.map(item =>  <li className={cn(styles.navItem, {
                [styles.navItemActive]: item === activePage
            })} onClick={() => setActivePage(item)}>{item}</li>)}
        </ul>
    )
};

export default Nav;