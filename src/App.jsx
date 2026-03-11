
import About from './components/About.jsx'
import './App.css'
import Home   from './components/Home.jsx'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import Portfol from './components/Portfol.jsx'
import Resume from './components/Resume.jsx'
import Skill from './components/Skill.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return(

    <>
       <div className="all-wrapper">
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/portfol' element={<Portfol/>}/>
        <Route path="/about" element={<About />} />
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>

    <Header/>
       </div>
    </>

  )
}

export default App
