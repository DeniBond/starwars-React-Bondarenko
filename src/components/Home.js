/*
import React from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

const Home = (props) => {
    return (
        <main className={'clearfix'}>
            <Hero hero={props.hero}/>
            <Friends hero={props.hero} changeHero={props.changeHero}/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;*/

import React, {Component} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {characters, defaultHero} from "../utils/constants";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

class Home extends Component {


    componentDidMount() {
        let key = this.getKey();
        this.props.changeHero(key);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let key = this.getKey()
        if (prevProps.hero!==key){
            this.props.changeHero(key)
        }
    }

    getKey = () => {
        let key = this.props.match.params.hero;
        if (!characters.includes(key))
            key = defaultHero;
        return key

    }

    render() {
        let key = this.getKey();

        return (
            <main className={'clearfix'}>
                <Hero hero={key}/>
                <Friends hero={key} changeHero={this.props.changeHero}/>
                <FarGalaxy/>
            </main>
        );
    }
}

export default Home;