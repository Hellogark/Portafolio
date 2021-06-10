import React from 'react'
import './Projects.css'
import DownArrow from '../DownArrow/DownArrow';
import { useTranslation } from 'react-i18next'

const Projects = () => {
const { t, i18n } = useTranslation();

    return (
        <div className="projects-container" name="projects">

        <section className="projects-section">
        <div className="projects__title">
            <h1>Projects</h1>
        </div>
       
      
        </section>
        <DownArrow container={"projects"} offset={20} />

    </div>
    )
}

export default Projects
