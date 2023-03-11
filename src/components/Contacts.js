import React, {Component} from 'react';
import {baseURL} from "../utils/constants";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        fetch(`${baseURL}/planets`)
            .then(response => response.json())
            .then(data => {
                const planets =  data.map((object) => object.name)
                localStorage.setItem('planets', JSON.stringify(planets))
                console.log(localStorage.getItem('planets'))
                this.setState({
                    isLoading: false
                })
            })
    }
    optionsRender = () =>{
        if (localStorage.getItem('planets')){
            return (
                (JSON.parse(localStorage.getItem('planets'))).map((planet, index ) => {
                    return <option value={planet} name={planet} key={index}>{planet}</option>
                })
            )
        } else {
            return <option>load..</option>
        }
    }

    render() {
        return (
            <div className={'container'}>
                <form onSubmit={this.sendForm}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <label htmlFor="planets">Planets</label>
                    <select id="planets" name="planets">
                        {this.optionsRender()}
                    </select>
                </form>
            </div>
        );
    }
}

export default Contacts;