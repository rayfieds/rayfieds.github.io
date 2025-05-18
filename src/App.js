import './style.css';
import Navbar from './navbar';
import Timeline from './Timeline';
import Footer from './footer'; 


function App(){
  return (
    <div className="App">
        <Navbar />
      {/* <nav className="navbar">
        <div className="navbar__container">
            <a href="/" id="navbar__logo">
                <img src ="/raccoon 5.png" alt = "raccoon!" className = "logo-image"/>
            </a>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="/" className="navbar__links"> home </a>
                </li>
                <li className="navbar__item">
                    <a href="/" className="navbar__links"> about </a>
                </li>
                <li className="navbar__item">
                    <a href="/" className="navbar__links"> stuff </a>
                </li>
                <li className="navbar__item">
                    <a href="/blog.html" className="navbar__links"> blog </a>
                </li>
                <li className="navbar__item">
                    <a href="/" className="navbar__links"> contact </a>
                </li>
            </ul>
        </div>
    </nav> */}
        <div className="main">
            <div className="main__container" id="home">
                <div className="main__content">
                    <h1> hello! </h1>
                    <h2> i'm rachael</h2>
                    <p> come stalk me in this corner of the internet :D</p>
                    <button className="main__btn"><a href="#about">get to know me!</a></button>
                </div>
                <div className="main__img--container">
                    <img src="/raccoon 2.png" alt="sleepy raccoon" id ="main__img"/>
                </div>
            </div>
        </div>

        <div className="about">
            <div className="about__container" id="about">
                <div className="about__img--container">
                    <img src="/raccoon 4.png" alt="king raccoon" id ="about__img"/>
                </div>
                <div className="about__content">
                    <h1> a bit about me! </h1>
                    <p> heyo! my name is rachael, a first year student @ the university of waterloo studying systems design engineering.</p>   
                    <p> in my free time, you can find me playing badminton, cooking or baking, and making various hackathons & events come to fruition! i also happen to really like trash pandas! (if you couldn't tell)</p>
                    <p>i like to try new stuff! and contribute where i can to make life a bit more fun for everyone :D</p>

                </div>  
            </div>
        </div>
        <div className = "timeline">
            <div className= "timeline__container" id="stuff">
              <div className="timeline__content">
                  <h1> experiences! </h1>
              </div>
                <div id="timeline-root">
                  <Timeline />
                </div>
            </div>
        </div>
        <div className = "contact">
            <div className= "contact__container" id="contact">
              <div className="contact__content">
                <div id="contact-root">
                    <Footer />
                </div>
              </div>
            </div>
        </div>
    </div>
    
    
  );
}

export default App;
