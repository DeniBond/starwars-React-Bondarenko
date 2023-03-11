import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Starwars from "./Starwars";
import Contacts from "./Contacts";
import {aboutMePage, contactPage, starWarsPage} from "../utils/constants";

const Main = (props) => {

    switch (props.page) {
        case aboutMePage : return (<AboutMe/>)
        case starWarsPage : return (<Starwars/>)
        case contactPage : return (<Contacts/>)
        default: return (<Home/>)
    }
};

export default Main;