import React, { useState, useEffect } from "react";
import TS from '../../images/typescript.png'
import MongoDB from '../../images/mongodb.png'


interface Props {
    enterViewPort: number;
    exitViewPort: number;
}

const Skills: React.FC<Props> = ({ enterViewPort, exitViewPort }) => {
    const [currentClass, setCurrentClass] = useState('info')
    useEffect(() => {
        if ((enterViewPort === 2 && exitViewPort === 0) || (enterViewPort === 1 && exitViewPort === 3) || (enterViewPort === 2 && exitViewPort === 5)) {
            setCurrentClass('current-info')
        }
        else {
            setCurrentClass('info')
        }

    }, [enterViewPort, exitViewPort])
    return (
        <div className={currentClass}>

            <h1 style={{ marginBottom: '10px', marginTop: '-20px' }}>Skills</h1>
            <div className="row">
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-html5 skill-icon" style={{ color: 'rgb(234,98,40)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">HTML</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-css3-alt skill-icon" style={{ color: 'rgb(51,163,213)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">CSS</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-js skill-icon" style={{ color: 'rgb(255,217,58)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">JavaScript</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <img className='ts-icon' src={TS} ></img>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text img-text">TypeScript</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-bootstrap skill-icon" style={{ color: 'rgb(84,59,121)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">Bootstrap</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-react skill-icon" style={{ color: 'rgb(97,218,251)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">React/Redux</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-react skill-icon" style={{ color: 'rgb(97,218,251)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">React Native</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-sass skill-icon" style={{ color: 'rgb(201,97,150)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">Sass</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-node-js skill-icon" style={{ color: 'rgb(140,200,75)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">Node.js</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-node-js skill-icon" style={{ color: 'rgb(140,200,75)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">Express</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <img className='ts-icon' src={MongoDB} ></img>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text img-text">MongoDB</a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-icon-container">
                        <i className="fab fa-git-alt skill-icon" style={{ color: 'rgb(240,81,51)' }}></i>
                    </div>
                    <div className="skills-text-container">
                        <a className="skill-text">Git</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;

