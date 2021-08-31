import React from 'react';
import {Link} from "react-router-dom";
import hero from '../../images/hero.png'

const Home = () => {
    return (
        <section className="hero mtop-5">
            <div className="hero__container container">
                <div className="hero__grid">
                    <div className="hero__box">
                        <h1 className="hero__title">Making time a good time by making food the good food.</h1>
                        <p className="hero__desc">There are many things are needed to start the Fast Food Business. You
                            need not only Just Food Stalls with Persons but also specialized equipment,</p>
                        <div className="hero__buttons">
                            <Link to="/meals" href="#" className="hero__btn">Recipes Menu</Link>
                            <Link to="/meal/52857" href="#" className="hero__btn">Food Details</Link>
                        </div>
                    </div>
                    <div className="hero__img">
                        <img src={hero} alt="hero-bg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;