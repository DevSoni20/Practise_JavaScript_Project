import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile.jsx'
import './App.css'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container my-16 mx-auto bg-slate-200 h-[550px]'>
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App
