import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";



function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="__container">
                    <Main/>
                    <Skills/>
                    <AboutMe/>
                </div>
            </main>
        </div>
    );
}

export default App;

