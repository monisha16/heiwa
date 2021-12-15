import React from 'react';
import { useLocation } from 'react-router-dom';
import github from '../../assests/icons/github.svg';
import linkedin from '../../assests/icons/linkedin.svg'
import styles from './footer.module.scss'

const Footer: React.FC = () => {
    const location = useLocation();
    // Regex to of path's that have nav bar.
    // const routeRegex = [/colotherapy/];
    // // Check path to see if the screen has a nav bar or not.
    // const checkPath = routeRegex.find((text:any) => text.test(location.pathname));
    // Footer style object.
    const checkPath = true;
    const page = "color";

    const footerStyle: React.CSSProperties = {
        position: 'fixed',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        bottom: 0,
        paddingBottom: '5px',
        color: page == "color" ? 'black' : 'white',
        padding: '0 7rem',
        boxSizing: 'border-box',
        width: '100%',
        height: '4rem',
        backgroundColor: checkPath ? 'rgb(20, 19, 19, 10%)' : '#34558B' ,
        backdropFilter: checkPath? 'blur(6px)' : 'none',
        fontSize: '1.2rem',
    }

    return (
        <div style={footerStyle}>
            <div> Made by <b>Monisha Tarkar</b> </div> 
            <div className={styles['accounts']}>
                <a id="text-link" href="https://github.com/monisha16" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                </a>
                 |
                <a id="text-link" href="https://www.linkedin.com/in/monisha-tarkar/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedIn" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
