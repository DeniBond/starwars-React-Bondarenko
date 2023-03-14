import React, {Component} from 'react';

import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {AppContext} from "./utils/appContext";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: ''
        }
    }

    changeActivePage = (page) =>{
        this.setState({
            activePage: page
        })
    }
    render() {
        return (
            <div className={'container-fluid'}>
                <AppContext.Provider value={{
                    changePage: this.changeActivePage,
                    activePage: this.state.activePage
                }}>
                    <Header/>
                    <Main/>
                    <Footer/>
                </AppContext.Provider>
            </div>
        );
    }
}

export default App;
