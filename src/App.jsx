import React from 'react';
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap'
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
    return (
        <main>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className={` h-dvh bg-black`}></div>
        </main>
    );
}

export default App;
