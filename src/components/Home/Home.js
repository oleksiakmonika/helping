import React from 'react';
import Header from './Header';
import TreeColumns from "./TreeColumns";
import SimpleSteps from "./SimleSteps";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import WhoWeHelp from "./WhoWeHelp";

const Home = () => (
    <section id='home'>
        <h1>Home</h1>
        <Header/>
        <TreeColumns/>
        <SimpleSteps/>
        <AboutUs/>
        <WhoWeHelp/>
        <Contact/>
    </section>
)

export default Home;