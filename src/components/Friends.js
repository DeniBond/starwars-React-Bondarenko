import React from 'react';
import {characters, friends} from "../utils/constants";
import Friend from "./Friend";

const Friends = () => {
    return (
        <section className="right float-end w-50 row border border-light no-gutters justify-content-between m-2">
            <h3 className="col-12 text-center">Friends</h3>
            {
                characters.map((item, index) => <Friend friend ={friends[item].img} key={index}/>)
            }
        </section>
    );
};

export default Friends;