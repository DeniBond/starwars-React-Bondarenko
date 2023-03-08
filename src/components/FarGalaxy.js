import React, {Component} from 'react';
import {getRandomNumber as randNumber} from "../utils/Toolbox";

class FarGalaxy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainText: ''
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
        console.log('FarGalaxy rendered')
        return (
            <p className="p-1">{this.state.mainText}</p>
        );
    }
}

export default FarGalaxy;