import React from 'react';
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap'
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Cocktails from "./Components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
    return (
        <main>
            <Navbar></Navbar>
            <Hero></Hero>
            <Cocktails></Cocktails>
        </main>
    );
}

export default App;
