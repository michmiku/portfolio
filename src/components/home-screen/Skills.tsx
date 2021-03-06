import React, { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion"
import Skill from ".//Skill"

interface Props {

}

const Skills: React.FC<Props> = () => {
    const [currentClass, setCurrentClass] = useState(false)

    const skills: any = useRef(null)
    const skillsScroll = () => {
        let widnowHeight = window.innerHeight
        if (skills.current !== null) {
            if (skills.current.getBoundingClientRect().top - window.innerHeight + widnowHeight / 2 < 0 && skills.current.getBoundingClientRect().top > -200) {
                setCurrentClass(true)
            }
            else {
                setCurrentClass(false)
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', skillsScroll)
    }, [])

    const skillsList: {
        icon: string;
        text: string;
        color: string;
        img: boolean;
        duration: number;
    }[] = [
            {
                icon: 'fa-html5 fab skill-icon',
                text: 'HTML',
                color: 'rgb(234,98,40)',
                img: false,
                duration: 0.3
            },
            {
                icon: 'fa-css3-alt fab skill-icon',
                text: 'CSS',
                color: 'rgb(51,163,213)',
                img: false,
                duration: 0.35
            },
            {
                icon: 'fa-js fab skill-icon',
                text: 'JavaScript',
                color: 'rgb(255,217,58)',
                img: false,
                duration: 0.4
            },
            {
                icon: 'TS',
                text: 'TypeScript',
                color: '',
                img: true,
                duration: 0.45
            },
            {
                icon: 'fa-bootstrap fab skill-icon',
                text: 'Bootstrap',
                color: 'rgb(84,59,121)',
                img: false,
                duration: 0.5
            },
            {
                icon: 'fa-react fab skill-icon',
                text: 'React/Redux',
                color: 'rgb(97,218,251)',
                img: false,
                duration: 0.55
            },
            {
                icon: 'fa-react fab skill-icon',
                text: 'React Native',
                color: 'rgb(97,218,251)',
                img: false,
                duration: 0.6
            },
            {
                icon: 'fa-sass fab skill-icon',
                text: 'Sass',
                color: 'rgb(201,97,150)',
                img: false,
                duration: 0.65
            },
            {
                icon: 'fa-node-js fab skill-icon',
                text: 'Node.js',
                color: 'rgb(140,200,75)',
                img: false,
                duration: 0.7
            },
            {
                icon: 'fa-node-js fab skill-icon',
                text: 'Express',
                color: 'rgb(140,200,75)',
                img: false,
                duration: 0.75
            },
            {
                icon: 'MongoDB',
                text: 'MongoDB',
                color: '',
                img: true,
                duration: 0.8
            },
            {
                icon: 'fa-git-alt fab skill-icon',
                text: 'Git',
                color: 'rgb(240,81,51)',
                img: false,
                duration: 0.85
            },
        ]

    return (
        <motion.section id="skills" ref={skills}>
            <AnimatePresence>
                {currentClass && (
                    <motion.h1
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2, type: 'tween' }}
                        exit={{ x: '-100vw' }}
                    >Skills</motion.h1>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {currentClass && (

                    <motion.div className="skills-container grid"
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        exit={{ x: '-100vw' }}>
                        {
                            skillsList.map((item: {
                                icon: string;
                                text: string;
                                color: string;
                                img: boolean;
                                duration: number;
                            }, key: number) => (
                                    <Skill currentClass={currentClass} item={item} key={key} />

                                ))
                        }


                    </motion.div>
                )}
            </AnimatePresence>

        </motion.section>



    )
}

export default Skills;

