import React from "react";
import styles from './header.module.scss'
import heiwaIcon from '../../assests/icons/heiwa.svg'
import {useNavigate} from "react-router-dom"

const Header = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate('/')}className={styles['heiwa-header']}>
            <img src={heiwaIcon} alt="icon" />
        </div>
    );
}

export default Header;