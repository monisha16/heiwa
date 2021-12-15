import React,{useState} from "react";
import Footer from '../Footer/footer';
import styles from './home.module.scss';
import Heiwa from '../../assests/images/heiwa.svg'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const HomeComponent = ():JSX.Element =>{
    const [reRender, setReRender] = useState(false);
    const navigate = useNavigate();
    return(
        <>
        <div className={styles['heiwa']}>
            <div className={styles['heiwa__info']}>
                <div className={styles['main-heading']} style={{fontSize:'5rem', fontWeight:'bolder'}}> HEIWA </div>
                <div style={{ fontSize: '2rem', marginBottom:'1rem' }}> Tune into your body and experience true peace. </div>
                <div>
                    <Button variant="outlined" style={{ marginRight: "0.5rem" }} onClick={()=>{navigate('/soundtherapy');}}> Sound Therapy</Button>
                    <Button variant="outlined" onClick={() => { navigate('/colortherapy'); }}> Color Therapy</Button>
                </div>
            </div>
            <img className={styles['heiwa__image']} src={Heiwa} alt="Meditation SVG" />
        </div>
        <Footer/>
        </>
    );
}

export default HomeComponent;