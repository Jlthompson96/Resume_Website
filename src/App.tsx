import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div>
      <HeroBanner />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
