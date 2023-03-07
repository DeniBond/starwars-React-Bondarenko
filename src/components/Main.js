import React, {Component} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {getRandomNumber as randNumber} from "../utils/Toolbox";


class Main extends Component {



    render() {
        return (
            <main className={'clearfix'}>
                <Hero/>
                <Friends/>
                <FarGalaxy/>
            </main>
        );
    }
}

export default Main;