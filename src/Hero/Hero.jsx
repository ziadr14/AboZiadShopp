import './Hero.css'
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <section className='hero flex'>
            <div className="title">
            <h1>
            <Typewriter
                    
                    options={{
                        autoStart: true ,
                        loop: true ,
                        delay: 50 ,
                        strings: ["ABO ZIAD"]
                    }}
                    />
                </h1>
            <p>All types of paint materials.</p>
            <button> <a href="#pro">Buy Now</a> </button>
            </div>
            <div className="img">
                <img src="colors.png" alt="" />
            </div>
        </section>
    )
}
