import { useState, useEffect } from "react";
import Clock from './Clock.js'
import Atv04 from "./Atv04.js";

export default function Clock ({Time}) {
    return (
        <>
        <h1>{Time}</h1>
        <imput />
        </>
    );
}
export default function App() {
    const time = useTime();
    return (
        <Clock time={time.tolocaleTimeString()} />
    );
     
}
