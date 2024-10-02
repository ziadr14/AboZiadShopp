import { useState , useEffect } from 'react';
import "./Main.css";
import AOS from 'aos'
import "aos/dist/aos.css";

export default function Main() {
    useEffect(()=> {
        AOS.init({duration: 2000})
    }, [])

    const myProject = [
        { productTitle: "Almokawem", dataAos:"fade-up" , category: "Paint", imgPath: "./img.png" },
        { productTitle: "Scib", dataAos :"fade-up" , category: "Paint", imgPath: "./img2.png" },
        { productTitle: "Sl-Tone", dataAos:"fade-up" , category: "Paint", imgPath: "./img3.png" },
        { productTitle: "Day-Stone", dataAos:"fade-up" , category: "Paint", imgPath: "./img4.png" },
        { productTitle: "Tecno", dataAos:"fade-up" , category: "Putty", imgPath: "./img8.png" },
        { productTitle: "Kematone", dataAos:"fade-up" , category: "Putty", imgPath: "./img6.png" },
        { productTitle: "Gelstic", dataAos:"fade-up" , category: "Putty", imgPath: "./img7.png" },
        { productTitle: "Elgazala", dataAos:"fade-up" , category: "Putty", imgPath: "./img9.png" },
        { productTitle: "Rola", dataAos:"fade-up" , category: "Equipment", imgPath: "./ec1.png" },
        { productTitle: "Rola", dataAos:"fade-up" , category: "Equipment", imgPath: "./ec2.png" },
        { productTitle: "Bruch", dataAos:"fade-up" , category: "Equipment", imgPath: "./ec3.png" },
        { productTitle: "Elgazala", dataAos:"fade-up" , category: "Equipment", imgPath: "./ec4.png" },
    ]

    const [activ, setActiv] = useState(true);
    const [arr, setArr] = useState(myProject);

    const handelButton = (catButton) => {
        setActiv(catButton)

        const newArr = myProject.filter((item) => {
            return item.category === catButton

        })
        setArr(newArr)
    }

    return (
        <main id='pro' className="flex">

            <section 
            data-aos="fade-up"
            className="flex left-Section">
                <button className={activ === true ? "active" : null}

                    onClick={() => {
                        setActiv(true)
                        setArr(myProject)
                    }}>All Porduct</button>
                <button

                    className = {activ === "Paint" ? "active" : null}
                    onClick = {() => {
                        handelButton("Paint")
                    }}
                    >Paint</button>
                
                
                
                <button 
                    className={activ === "Putty" ? "active" : null}

                    onClick={() => {
                        handelButton("Putty")
                    }}


                >Putty</button>
                <button 

                    className={activ === "Equipment" ? "active" : null}

                    onClick={() => {
                        handelButton("Equipment")
                    }}

                >Equipment</button>

            </section>



            <section className=" flex right-section">
                {arr.map((item) => {
                    return (
                        <article key={item} data-aos={item.dataAos} className="card">
                            <img width={266} src={item.imgPath} alt="" />

                            <div style={{ width: "266px" }} className="box">
                                <h1 className="title">{item.productTitle}</h1>
                                <p className="sub-title">
                                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                                    tempore dolor in, accusantium laudantium accusamus.
                                </p>

                                <a className="link flex" href="">
                                    <button>Bay Now</button>
                                    <span
                                        style={{ alignSelf: "end" }}
                                        className="icon-arrow-right"
                                    ></span>
                                </a>
                            </div>
                        </article>
                    );
                })}
            </section>
        </main>
    );
}
