import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar /> }  />
          <Route path="/About" element={<About />} />  
          <Route path="/Project" element={<Project />} />  
          <Route path="/Contact" element={<Contact />} />  
        </Routes>     
      </Router> 
    </>
  )
}

export default App
