import React from 'react';
import friend1 from '../images/friend1.jpg'
import friend2 from '../images/friend2.jpg'
import friend3 from '../images/friend3.jpg'
import friend4 from '../images/friend4.jpg'
import friend5 from '../images/friend5.jpg'
import friend6 from '../images/friend6.jpg'
import friend7 from '../images/friend7.jpg'
import friend8 from '../images/friend8.jpg'
import friend9 from '../images/friend9.jpg'

const Friends = () => {
    return (
        <section className="right float-end w-50 row border border-light no-gutters justify-content-between m-2">
            <h3 className="col-12 text-center">Friends</h3>
            <img className="col-4 p-1" src={friend1} alt="friend"/>
            <img className="col-4 p-1" src={friend2} alt="friend"/>
            <img className="col-4 p-1" src={friend3} alt="friend"/>
            <img className="col-4 p-1" src={friend4} alt="friend"/>
            <img className="col-4 p-1" src={friend5} alt="friend"/>
            <img className="col-4 p-1" src={friend6} alt="friend"/>
            <img className="col-4 p-1" src={friend7} alt="friend"/>
            <img className="col-4 p-1" src={friend8} alt="friend"/>
            <img className="col-4 p-1" src={friend9} alt="friend"/>
        </section>
    );
};

export default Friends;