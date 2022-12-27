import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./works/MyWorks";
import {Relocation} from "./relocation/Relocation";
import {Contacts} from "./contacts/Contats";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Relocation/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
