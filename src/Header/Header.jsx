{/* <FontAwesomeIcon icon={faMoon} />
<FontAwesomeIcon icon={faSun} /> */}
// , faMoon , faSun
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faMoon , faClose , faSun } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


export default function Header() {

    const [model , setModel] = useState(false)
    const [mode , setMode] = useState(localStorage.getItem("currendMode"))
    useEffect (() => {
        if(mode==="dark") {
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        }else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    } , [mode] )


    return (
    <header className="flex">

        <button className='bar'
        
        onClick={() => {
            setModel(true)
        }}
        
        >
            <FontAwesomeIcon icon={faBars}/>
        </button>
        <div/>

        <nav>
        <ul className="flex ">
                <li>
            <a href="#">Home </a>
                </li>
                <li>
            <a href="#pro">Product</a>
                </li>
                <li>
            <a href="#about">About</a>
                </li>
                <li>
            <a href="#con">Contact Us</a>
                </li>
        </ul>
        </nav>
        <button className='moon'
        
        onClick={() => {
            localStorage.setItem("currendMode" , mode === "dark" ? "light" : "dark")
            setMode(localStorage.getItem("currendMode"))
        }}
        
        >
            {mode === "dark" ? <FontAwesomeIcon icon={faMoon}/> :  <FontAwesomeIcon icon={faSun}/>}
        </button>

        {model && (
                    <div className="fixed">
                    <ul className='model '>
                        <li
                        onClick={() => {
                            setModel(false)
                        }}
                        
                        >
                        < FontAwesomeIcon className='icon-close' icon={faClose}/>
                        </li>
                    <li onClick={() => {
                            setModel(false)
                        }}>
                    <a href="#">Home </a>
                        </li >
                        <li onClick={() => {
                            setModel(false)
                        }}>
                    <a href="#pro">Product</a>
                        </li>
                        <li onClick={() => {
                            setModel(false)
                        }}>
                    <a href="#about">About</a>
                        </li>
                        <li onClick={() => {
                            setModel(false)
                        }}>
                    <a href="#con">Contact Us</a>
                        </li>
                    </ul>
                </div>
        )}


    </header>
    )
}
