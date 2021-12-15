import React from "react";
import styles from './header.module.scss'
import heiwaIcon from '../../assests/icons/heiwa.svg'

const Header = (): JSX.Element => {
    return (
        <div className={styles['heiwa-header']}>
            <img src={heiwaIcon} alt="icon" />
        </div>
    );
}

export default Header;