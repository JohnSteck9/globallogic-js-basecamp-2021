import './styles/index.css'
import myImg from './images/me.jpg'
import Workskills from './components/Workskills/Workskills'
import SocialMedia from './components/SocialMedia/SocialMedia'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import AboutMe from './components/AboutMe/AboutMe'


function App() {
    return (
        <div className='App'>
            <div className='container'>

                <div className='row'>
                    <div className='col-md-4  bg_left'>
                        <div className='photo__box'>
                            <img src={myImg} className='photo__box_img' alt='John Steck' />
                        </div>
                    </div>

                    <div className='col-md-8 title_text bg_right'>
                        <h1>Mykhailo Felishtan</h1>
                        <h2>Full Steck Developer</h2>
                    </div>
                </div>

                <div className='row'>
                    <AboutMe />
                    <Education />
                </div>
                <div className='row'>
                    <Contact />
                    <Experience />
                </div>
                <div className='row'>
                    <SocialMedia />
                    <Workskills />
                </div>

            </div>

        </div>
    )
}

export default App
