import marcMarquezWatch from "./images/marc_marquez_watch.png";
import motoGP2025 from "./images/MotoGP_2025.png";
import tRace45mm from "./images/T-Race_45mm.png";
import tRace41mm from "./images/T-Race_41mm.png";
import tRace38mmWhite from "./images/T-Race_38mm_white.png";
import tRace38mmBlack from "./images/T-Race_38mm_black.png";

const array = [
    {
        id: "marc-marquez",
        label: "Marc Marquez",
        spec: {
            energy: "Quartz EOL",
            movement: "Swiss quartz",
            battery: "battery type Renata 394 / 1.55 V",
            functions: "EOL (battery end-of-life indicator), 30-minutes and 1/10 of a second counters, Central 60-seconds chronograph hand, ADD and SPLIT functions",
            dial: "HMsSD (Hour, Minute, small second, central 60-Seconds hand, Date)",
            caliber: "13 1/4'",
            diameter: 29.8,
            cosc: true
        },
        src: marcMarquezWatch
    },
    {
        id: "motogp-2025",
        label: "MotoGP 2025",
        spec: {
            energy: "Quartz EOL",
            movement: "Swiss quartz",
            battery: "battery type Renata 394 / 1.55 V",
            functions: "EOL (battery end-of-life indicator), 30-minutes and 1/10 of a second counters, Central 60-seconds chronograph hand, ADD and SPLIT functions",
            dial: "HMsSD (Hour, Minute, small second, central 60-Seconds hand, Date)",
            caliber: "13 1/4'",
            diameter: 29.8,
            cosc: false
        },
        src: motoGP2025
    },
    {
        id: "t-race-45mm",
        label: "T-Race 45mm",
        spec: {
            energy: "Quartz EOL",
            movement: "Swiss quartz",
            battery: "battery type Renata 394 / 1.55 V",
            functions: "EOL (battery end-of-life indicator), 30-minutes and 1/10 of a second counters, Central 60-seconds chronograph hand, ADD and SPLIT functions",
            dial: "HMsSD (Hour, Minute, small second, central 60-Seconds hand, Date)",
            caliber: "13 1/4'",
            diameter: 29.8,
            cosc: false
        },
        src: tRace45mm
    },
    {
        id: "t-race-41mm",
        label: "T-Race 41mm",
        spec: {
            energy: "Automatic",
            movement: "Swiss automatic",
            powerReserve: "Powwer reserve up to 80 hours",
            functions: "Patented Nivachron balance spring",
            dial: "HMsSD (Hour, Minute, Second, Date)",
            caliber: "11 1/2'",
            diameter: 25.6,
            cosc: false
        },
        src: tRace41mm
    },
    {
        id: "t-race-38mm-white",
        label: "T-Race 38mm",
        spec: {
            energy: "Quartz EOL",
            movement: "Swiss quartz",
            battery: "battery type Renata 394 / 1.55 V",
            functions: "EOL (battery end-of-life indicator), 30-minutes and 1/10 of a second counters, Central 60-seconds chronograph hand, ADD and SPLIT functions",
            dial: "HMsSD (Hour, Minute, small second, central 60-Seconds hand, Date)",
            caliber: "10 1/2'",
            diameter: 23.3,
            cosc: false
        },
        src: tRace38mmWhite
    },
    {
        id: "t-race-38mm-black",
        label: "T-Race 38mm",
        spec: {
            energy: "Quartz EOL",
            movement: "Swiss quartz",
            battery: "battery type Renata 394 / 1.55 V",
            functions: "EOL (battery end-of-life indicator), 30-minutes and 1/10 of a second counters, Central 60-seconds chronograph hand, ADD and SPLIT functions",
            dial: "HMsSD (Hour, Minute, small second, central 60-Seconds hand, Date)",
            caliber: "13 1/4'",
            diameter: 29.8,
            cosc: false
        },
        src: tRace38mmBlack
    }
];

export default array;