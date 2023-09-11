import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {ButtonToTop} from "./components/buttonToTop/ButtonToTop";
import {Scroll} from "./components/scroll";
import {Translator} from "./components/translator/Translator";
import React from "react";


function App() {
    return (
        <div className="App">
            <Scroll/>
            <Particle/>
            <Header/>
            <main>
                <Main/>
                <Portfolio/>
                <Skills/>
                <AboutMe/>
                <Contacts/>
            </main>
            <Footer/>
            <ButtonToTop/>
        </div>
    );
}

export default App;

