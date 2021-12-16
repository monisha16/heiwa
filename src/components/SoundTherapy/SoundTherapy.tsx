// @ts-ignore
import React,{ useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from './soundtherapy.module.scss';
import storage from '../../storage';

const SoundCard = ({ title, Icon, sound, reRender, setReRender }:any) => {
    useEffect(() => {
        return
    }, [reRender])     
    return(
        <div className={styles["Card"]}>
            <Button className={styles["Card__Button"]}
                style={{
                    borderRadius: 20,
                    // background: 'rgb(25 118 210 / 4%);',
                    textTransform: "none",
                    padding: 0,
                    background: "white",
                }}>

                <div id={`${title}-card`} className={styles["Card__Button__gr"]}>
                    <div className={styles["Card__ButtonInner"]}
                        onClick={() => {
                            let audioPlayer: any = document.getElementById(title)!;
                            if (!audioPlayer.paused) {
                                audioPlayer.pause();
                                setReRender(!reRender);
                                document
                                    .querySelector(`#${title}-card`)!
                                    .classList.remove(`gradientAnimation`);
                                return;
                            }
                            document
                                .querySelector(`#${title}-card`)!
                                .classList.add(`gradientAnimation`);
                            audioPlayer.play();
                            setReRender(!reRender);
                        }}
                    >
                        <div style={{
                            textAlign: "center",
                            display: "flex",
                            color: "black",
                            textTransform: "capitalize",}}  
                        >
                            <h1>{title}</h1>
                        </div>
                        <img src={Icon} alt={title} />
                        <audio id={title} preload="none" loop>
                            <source src={sound} type="audio/mp3" />
                        </audio>  
                    </div>
                </div>

            </Button>
        </div>
    );
};



const SoundTherapy = (): JSX.Element => {
    const [reRender, setReRender] = useState(false);
    return(
            <div  className={styles["st-container"]}>
                {storage.map((item) => {
                    console.log("items",item)
                    return <SoundCard key={item.name} reRender={reRender} setReRender={setReRender} title={item.name} Icon={item.image.default} sound={item.sound}></SoundCard>
                })}
            </div>
    )}


export default SoundTherapy;