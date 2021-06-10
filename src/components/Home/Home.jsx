import React from 'react'
import DownArrow from '../DownArrow/DownArrow';
import './Home.css'

const Home = () => {

    return (
        <div className="home-container" name="home">

            <section className="home-section">
                <div className="cards-container" >
                    <h2 className="nombre">
                        Eduardo Moreno
                    </h2>
                    <div className="stack-card" >
                        <h3>
                            Full Stack Developer
                        </h3>
                    </div>
                </div>

            </section>
                <DownArrow container={"about"} offset={30} />
        </div>
    )
}

export default Home
