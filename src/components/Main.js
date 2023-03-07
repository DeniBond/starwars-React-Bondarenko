import React, {Component} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {getRandomNumber as randNumber} from "../utils/Toolbox";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainText: ' '
        }
    }

    componentDidMount() {
        fetch(`https://sw-info-api.herokuapp.com/v1/films/${randNumber(6)}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    mainText: data.opening_crawl
                })
            })
    }

    render() {
        return (
            <main className={'clearfix'}>
                <Hero/>
                <Friends/>
                <FarGalaxy textContent={this.state.mainText}/>
            </main>
        );
    }
}

export default Main;