import React from 'react';
import github from '../../assests/icons/github.svg';
import linkedin from '../../assests/icons/linkedin.svg'
import styles from './footer.module.scss'

const Footer: React.FC = () => {

    const footerStyle: React.CSSProperties = {
        position: 'fixed',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        bottom: 0,
        paddingBottom: '5px',
        color: 'black',
        padding: '0rem 7rem',
        boxSizing: 'border-box',
        width: '100%',
        height: '3rem',
        fontSize: '1.2rem',
    }

    return (
        <div className={styles['footer-bg']} style={footerStyle}>
            <div style={{color:'black', fontWeight:500}}> Made by <b>Monisha Tarkar</b> </div> 
            <div className={styles['accounts']}>
                <a id="github-link" href="https://github.com/monisha16" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                </a>
                 |
                <a id="linkedin-link" href="https://www.linkedin.com/in/monisha-tarkar/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedIn" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
