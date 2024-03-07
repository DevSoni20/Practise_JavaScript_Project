import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const increaseValue = () =>{
    setCounter(counter + 1);
  }
  const decreaseValue = () =>{
    setCounter(counter - 1);
  }
  const resetValue = () =>{
    setCounter(0);
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen' style={{backgroundColor: '#212121'}}>
        <div className="text-center">
          <h1 className='font-bold text-5xl text-white '>Counter</h1>
          <h1 className='py-4 text-8xl text-white'>{counter}</h1>
          <div className="flex justify-center">
            <button onClick={decreaseValue} className="mx-4 my-4 px-4 py-4 bg-blue-300 hover:bg-blue-500">DECREASE</button>
            <button onClick={resetValue} className='mx-4 my-4 px-4 py-4 bg-blue-300 hover:bg-blue-500'>RESET</button>
            <button onClick={increaseValue} className='mx-4 my-4 px-4 py-4 bg-blue-300 hover:bg-blue-500'>INCREASE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
