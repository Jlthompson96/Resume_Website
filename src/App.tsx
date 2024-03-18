import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div>
      <HeroBanner />
      <WorkExperience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
