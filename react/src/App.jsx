import React from "react";
import './App.css';
import './index.css';
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import About from "./components/About/About.jsx";
import Activity from "./components/Activitty/Activity.jsx";
import Video from "./components/Video/Video.jsx";
import Results from "./components/Results/Results.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
    return (
    <div className="container">
        <Header />
        <Main />
        <Benefits /> 
        <About />
        <Activity />
        <Video />
        <Results />
        <Footer /> 
    </div>        
    )
}

export default App


