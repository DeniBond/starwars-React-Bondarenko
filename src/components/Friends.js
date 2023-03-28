import React from 'react';
import {characters, friends} from "../utils/constants";
import Friend from "./Friend";

const Friends = (props) => {
    return (
        <section className="right float-end w-50 row border border-light no-gutters justify-content-between m-2">
            <h3 className="col-12 text-center">Friends</h3>
            {
                characters.filter(item =>item!==props.hero)
                    .map((item, index) =>
                        <Friend friend ={item} key={index} changeHero={props.changeHero}/>)
            }
        </section>
    );
};

export default Friends;