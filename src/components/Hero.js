import React from 'react';

const Hero = () => {
    return (
        <section className="left float-start w-25 m-2 row">
            {/*Оптимизация импорта происходит так*/}
            <img className="col-12" src={require('../images/main.jpg')}/>
        </section>
    );
};

export default Hero;