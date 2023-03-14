import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Starwars from "./Starwars";
import Contacts from "./Contacts";
import {aboutMePage, contactPage, starWarsPage} from "../utils/constants";
import {AppContext} from "../utils/appContext";

const Main = (props) => {

    return (
        <AppContext.Consumer>
            {value => {    switch (value.activePage) {
                case aboutMePage : return (<AboutMe/>)
                case starWarsPage : return (<Starwars/>)
                case contactPage : return (<Contacts/>)
                default: return (<Home/>)
            }}}
        </AppContext.Consumer>
    )
};

export default Main;