// @ts-ignore
import React,{ useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from './soundtherapy.module.scss';
import storage from '../../storage';


const SoundCard = ({ title, Icon, sound, reRender, setReRender }:any) => {
    useEffect(() => {
        return
    }, [reRender])

    // const [audio] = useState(new Audio(sound));
    // const [playing, setPlaying] = useState(false);

    // const toggle = () => setPlaying(!playing);

    // useEffect(() => {
    //     playing ? audio.play() : audio.pause();
    // },
    //     [playing]
    // );
    // useEffect(() => {
    //     audio.addEventListener('ended', () => setPlaying(false));
    //     return () => {
    //         audio.removeEventListener('ended', () => setPlaying(false));
    //     };
    // }, []);

    // return [playing, toggle];
    // };

    // return(
    //     <div className={styles["Card"]}>
    //     <Button
    //         className={styles["Card__Button"]}
    //         style={{
    //             borderRadius: 20,
    //             background: "white",
    //             textTransform: "none",
    //             padding: 0,
    //         }}
    //     >
    //             <div id={`${title}-card`} className={styles["Card__Button__gr"]}>
    //                 <div className={styles["Card__ButtonInner"]}
    //                 // onClick={() => {
    //                 //     if (!document.getElementById(title).paused) {
    //                 //         document.getElementById(title).pause();
    //                 //         setReRender(!reRender)
    //                 //         document
    //                 //             .querySelector(`#${title}-card`)
    //                 //             .classList.remove(`gradient-animation`);
    //                 //         return;
    //                 //     }
    //                 //     document
    //                 //         .querySelector(`#${title}-card`)
    //                 //         .classList.add(`gradient-animation`);
    //                 //     document.getElementById(title).play();
    //                 //     setReRender(!reRender);
    //                 // }}
    //             >
    //                 <div
    //                     style={{
    //                         textAlign: "left",
    //                         display: "flex",
    //                         color: "black",
    //                         textTransform: "capitalize",
    //                         fontFamily: "Epilogue",
    //                     }}
    //                 >
    //                     <h1>{title}</h1>
    //                 </div>
    //                 <div
    //                     style={{
    //                         display: "flex",
    //                         height: 110,
    //                         justifyContent: "center"
    //                     }}
    //                 >
    //                     <div style={{ width: "60%", alignItems: "center", display: "flex" }}>
    //                         <Icon></Icon>
    //                     </div>
    //                 </div>
    //                 <audio id={title} preload="none" loop>
    //                     <source src={sound} type="audio/mp3" />
    //                 </audio>
    //             </div>
    //         </div>
    //     </Button>
    // </div>
        
    // );
    return(
        <div className={styles["Card"]}>
            <Button className={styles["Card__Button"]}
                style={{
                    borderRadius: 20,
                    background: "black",
                    textTransform: "none",
                    padding: 0,
                }}>

                <div id={`${title}-card`} className={styles["Card__Button__gr"]}>
                    <div className={styles["Card__ButtonInner"]}
                        onClick={() => {
                            let audioPlayer: HTMLMediaElement = document.getElementById(title)!;
                            if (!audioPlayer.paused) {
                                audioPlayer.pause();
                            setReRender(!reRender)
                            document
                                .querySelector(`#${title}-card`)!
                                .classList.remove(`gradient-animation`);
                            return;
                        }
                        document
                            .querySelector(`#${title}-card`)!
                            .classList.add(`gradient-animation`);
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
            <div className={styles["st-container"]}>
                {storage.map((item) => {
                    console.log("items",item)
                    return <SoundCard key={item.name} reRender={reRender} setReRender={setReRender} title={item.name} Icon={item.image.default} sound={item.sound}></SoundCard>
                })}
            </div>
    )}


export default SoundTherapy;