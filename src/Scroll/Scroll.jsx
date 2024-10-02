// import React from 'react'
import { useState,useEffect } from "react";
import "./Scroll.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
export default function Scrool() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const [showButton, setShowButton] = useState(false);

    return (
        <a href="#up" id="sc" className="scroll">
            <button
                className={showButton === true ? "scro" : null}
            ><FontAwesomeIcon icon={faArrowUp}/></button>
        </a>
    );
}
