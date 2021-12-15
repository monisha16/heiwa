
import React,{ useState, useEffect } from "react";
// import Button from "@mui/material/Button";
// // import "./card.styles.scss";
// import styles
// import Slider from '@mui/material/Slider';
// import { styled } from '@mui/material/styles';
// import storage from "../../storage";
// // import { VolumeDown, VolumeUp, VolumeOff, VolumeMute } from "@mui/icons-material";


// // const SoundCard = ({ title, Icon, sound, reRender, setReRender }): JSX.Element => {
// //     useEffect(() => {
// //         return
// //     }, [reRender])

// //     const [volume, setVolume] = useState(100)

// //     return <div
// //         className="Card"
// //     >
// //         <Button
// //             className="Card__Button"
// //             style={{
// //                 borderRadius: 20,
// //                 background: "white",
// //                 textTransform: "none",
// //                 padding: 0,
// //             }}
// //         >
// //             <div id={`${title}-card`} className="Card__Button__gr">
// //                 <div className="Card__ButtonInner"
// //                     onClick={() => {
// //                         if (!document.getElementById(title).paused) {
// //                             document.getElementById(title).pause();
// //                             setReRender(!reRender)
// //                             document
// //                                 .querySelector(`#${title}-card`)
// //                                 .classList.remove(`gradient-animation`);
// //                             return;
// //                         }
// //                         document
// //                             .querySelector(`#${title}-card`)
// //                             .classList.add(`gradient-animation`);
// //                         document.getElementById(title).play();
// //                         setReRender(!reRender);
// //                     }}
// //                 >
// //                     <div
// //                         style={{
// //                             textAlign: "left",
// //                             display: "flex",
// //                             color: "black",
// //                             textTransform: "capitalize",
// //                             fontFamily: "Epilogue",
// //                         }}
// //                     >
// //                         <h1>{title}</h1>
// //                     </div>
// //                     <div
// //                         style={{
// //                             display: "flex",
// //                             height: 110,
// //                             justifyContent: "center"
// //                         }}
// //                     >
// //                         <div style={{ width: "60%", alignItems: "center", display: "flex" }}>
// //                             <Icon></Icon>
// //                         </div>
// //                     </div>
// //                     <audio id={title} preload="none" loop>
// //                         <source src={sound} alt="play" type="audio/mp3" />
// //                     </audio>
// //                 </div>
// //             </div>
// //         </Button>
// //     </div>
// // };



const SoundTherapy = (): JSX.Element => {
    return(
        <h1>Hello</h1>
    )}
//     // { reRender, setReRender }
//     return (
//         <div className="Card-Container">
//             {storage.map((item) => {
//                 console.log(item)
//                 // <SoundCard key={item.name} reRender={reRender} setReRender={setReRender} title={item.name} Icon={item.image} sound={item.sound}></SoundCard>
//             })}
//         </div>
//     );
// }

export default SoundTherapy;