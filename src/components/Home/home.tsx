import Footer from '../Footer/footer';
import styles from './home.module.scss';
import Heiwa from '../../assests/images/heiwa.svg'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const HomeComponent = ():JSX.Element =>{
    const navigate = useNavigate();
    return(
        <>
                <div className={styles['heiwa-container']}>
                    <div className={styles['left-column']}>
                        <h1 className={styles['left-column__main-heading']}>HEIWA</h1>
                        <p>Tune into your body and experience true peace.</p>
                        <div className={styles['info-button']}>
                            <Button className={styles['info-button__button']} variant="outlined" onClick={() => { navigate('/soundtherapy'); }}> Sound Therapy</Button>
                            <Button className={styles['info-button__button']} variant="outlined" onClick={() => { navigate('/colortherapy'); }}> Color Therapy</Button>
                        </div>
                    </div>
                    <div className={styles['right-column']}>
                        <img className={styles['right-column__heiwa-image']} src={Heiwa} alt="Meditation SVG" />
                    </div>
                </div>
        <Footer/>
        </>
    );
}

export default HomeComponent;