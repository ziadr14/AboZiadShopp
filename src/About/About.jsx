import './About.css'
import {useEffect} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
export default function About() {
    useEffect(()=> {
        AOS.init({duration: 2000})
    }, [])
    return (
        <section id='about' className="About flex">
            <img   data-aos="fade-up" src="./color 2.png"/>
            <h1   data-aos="fade-up">abo ziad shope</h1>
            <p   data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste facilis rem dignissimos, eligendi dolores repellat minus aliquam aut quibusdam?</p>
        </section>
    )
}

