import React from 'react';
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap'
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Cocktails from "./Components/Cocktails.jsx";
import About from './Components/About.jsx';
import Art from './Components/Art.jsx';
import Menu from './Components/Menu.jsx';
import Footer from './Components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
    return (
        <main className=' px-10'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Cocktails></Cocktails>
            <About></About>
            <Art></Art>
            <Menu></Menu>
            <Footer></Footer>
        </main>
    );
}

export default App;
