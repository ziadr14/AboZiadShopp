// import Contact from './Componant/contact/Contact';
// import Footer from './Componant/Footer/Footer';
import Contact from './Contact/Contact'
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Main from './Main/Main';
import About from './About/About';
import Footer from './Footer/Footer';
import Scroll from './Scroll/Scroll';
// import Hero from './Componant/herosec/Hero';
// import Main from './Componant/Main/Main';
// import Scroll from './Componant/scrool/Scrooll';


function App() {

  return (
    <div id='up' className='contaner'>
      <Header/>
      <div className="divider"></div>
      <Hero/>
      <div className="divider"></div>
      <Main/>
      <div className="divider"></div>
      <About/>
      <div className="divider"></div>
      <Contact/>
      <div className="divider"></div>
      <Footer/>
      <Scroll/>
    </div>
  );
}

export default App ;