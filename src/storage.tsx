import rainMp3 from "./assests/sounds/rain.mp3";
import lightningMp3 from "./assests/sounds/lightning.mp3";
import windMp3 from "./assests/sounds/wind.mp3";
import campfireMp3 from "./assests/sounds/campfire.mp3";
import forestMp3 from "./assests/sounds/forest.mp3";
import farmMp3 from "./assests/sounds/farm.mp3";
import birdsMp3 from "./assests/sounds/birds.mp3";
import nightMp3 from "./assests/sounds/night.mp3";
import windchimesMp3 from "./assests/sounds/windchimes.mp3";
import trainMp3 from "./assests/sounds/train.mp3";
import officeMp3 from "./assests/sounds/office.mp3";
import stepsMp3 from "./assests/sounds/steps.mp3";
import keyboardMp3 from "./assests/sounds/keyboard.mp3";
import cafeMp3 from "./assests/sounds/cafe.mp3";
import hz396Mp3 from "./assests/sounds/hz396.mp3";
import hz528Mp3 from "./assests/sounds/hz528.mp3";

const Rain = require("./assests/icons/rain.svg");
const Lightning   = require("./assests/icons/lightning.svg");
const Wind  = require("./assests/icons/wind.svg");
const CampFire  = require("./assests/icons/campfire.svg");
const Forest  = require("./assests/icons/forest.svg");
const Farm  = require("./assests/icons/farm.svg");
const Birds  = require("./assests/icons/birds.svg");
const Night  = require("./assests/icons/night.svg");
const WindChimes  = require("./assests/icons/windchimes.svg");
const Train  = require("./assests/icons/train.svg");
const Office   = require("./assests/icons/office.svg");
const Steps  = require("./assests/icons/steps.svg");
const Keyboard  = require("./assests/icons/keyboard.svg");
const Cafe  = require("./assests/icons/cafe.svg");
const Hz396  = require("./assests/icons/hz396.svg");
const Hz528  = require("./assests/icons/hz528.svg");


const storage = [
    {
        image: Rain,
        sound: rainMp3,
        name: "rain",
    },
    {
        image: Lightning,
        sound: lightningMp3,
        name: "lightning",
    },
    {
        image: Wind,
        sound: windMp3,
        name: "wind",
    },
    {
        image: CampFire,
        sound: campfireMp3,
        name: "campfire",
    },
    {
        image: Forest,
        sound: forestMp3,
        name: "forest",
    },
    {
        image: Birds,
        sound: birdsMp3,
        name: "birds",
    },
    {
        image: WindChimes,
        sound: windchimesMp3,
        name: "windchimes",
    },
    {
        image: Hz396,
        sound: hz396Mp3,
        name: "Hz396",
    },
    {
        image: Hz528,
        sound: hz528Mp3,
        name: "Hz528",
    },
    {
        image: Cafe,
        sound: cafeMp3,
        name: "cafe",
    },
    {
        image: Farm,
        sound: farmMp3,
        name: "farm",
    }, 
    {
        image: Night,
        sound: nightMp3,
        name: "night",
    },
    {
        image: Train,
        sound: trainMp3,
        name: "train",
    },
    {
        image: Keyboard,
        sound: keyboardMp3,
        name: "keyboard",
    },
    {
        image: Office,
        sound: officeMp3,
        name: "office",
    },
    {
        image: Steps,
        sound: stepsMp3,
        name: "steps",
    },
];


export default storage;

