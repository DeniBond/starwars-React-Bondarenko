import React, {Component} from 'react';
import {getRandomNumber, getRandomNumber as randNumber} from "../utils/toolbox";
import {baseURL} from "../utils/constants";

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            opening_crawl: ''
        }
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({
                isLoading: false,
                opening_crawl: opening_crawl
            })
        } else {
            let episode = getRandomNumber(6);
            fetch(`${baseURL}/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                        sessionStorage.setItem('opening_crawl', data.opening_crawl)
                        this.setState({
                            isLoading: false,
                            opening_crawl: data.opening_crawl
                        })
                    }
                )
        }
    }

    render() {
        return (this.state.isLoading) ?
            <p className="p-1">{'...LOADING'}</p> :
            <p className='p-1'>{this.state.opening_crawl}</p>
    }
}

export default FarGalaxy;
/*
setItem(key, value)
getItem(key)
remove(key)
clear()
key(index)
length
 */
