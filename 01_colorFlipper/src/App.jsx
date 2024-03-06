import React, { useState } from 'react'

function App() {
  const color = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'pink'];

  const [backgroundColor, setBackgroundColor] = useState('red');

  const changeBackgroundColor = () =>
  {
    const randomIndex = Math.floor(Math.random() * color.length);
    const randomColor = color[randomIndex];
    setBackgroundColor(randomColor);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen" style={{ backgroundColor: backgroundColor, transition: 'background-color 0.5s ease' }}>
        <div className="bg-black">
          <h1 className='px-4 py-4 text-white font-bold text-5xl'>Background Color : </h1>
        </div>
        <button onClick={changeBackgroundColor} className="bg-blue-300 hover:bg-blue-500 py-7 px-8 mx-4 my-4 text-black">Change Color</button>
      </div>
    </>
  )
}

export default App
