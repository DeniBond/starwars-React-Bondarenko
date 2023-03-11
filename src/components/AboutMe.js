import React, {Component} from 'react';
import {baseURL} from "../utils/constants";
import data from "bootstrap/js/src/dom/data";

class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            people_info: ''
        }
    }

    componentDidMount() {
        const people_info = JSON.parse(localStorage.getItem('people_info'))
        const today = +new Date()
        const limitTime = 1000 * 3600 * 24 * 30 // 30days

        if (people_info) {
            if (+new Date() - (+localStorage.getItem('created')) < limitTime) {
                this.setState({
                    isLoading: false,
                    people_info: JSON.parse(localStorage.getItem('people_info'))
                })
            } else {
                fetch(`${baseURL}/peoples/0`)
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem('people_info', JSON.stringify(data))
                        localStorage.setItem('created', +new Date())
                        this.setState({
                            people_info: JSON.parse(localStorage.getItem('people_info'))
                        })
                    })
            }
        } else {
            fetch(`${baseURL}/peoples/0`)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('people_info', JSON.stringify(data))
                    localStorage.setItem('created', +new Date())
                    this.setState({
                        people_info: JSON.parse(localStorage.getItem('people_info'))
                    })
                })
        }
    }

    render() {
        return (
            <div className={'d-flex align-items-center flex-column'}>
                <h1>{this.state.people_info.name}</h1>
                {/*Maybe name need send to header*/}
                <h1>Birth: {this.state.people_info.birth_year}</h1>
                <h1>Eye color: {this.state.people_info.eye_color}</h1>
                <h1>Gender: {this.state.people_info.gender}</h1>
                <h1>Hair color: {this.state.people_info.hair_color}</h1>
                <h1>Height: {this.state.people_info.height}</h1>
                <h1>Weight: {this.state.people_info.mass}</h1>
                <h1>Skin color: {this.state.people_info.skin_color}</h1>
            </div>
        );
    }
}

export default AboutMe