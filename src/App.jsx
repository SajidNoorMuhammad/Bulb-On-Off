import { useState } from 'react'
import './App.css'

function App() {
  const [bulb, setBulb] = useState('off')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="mb-10">
        <img
          className="h-90 rounded-4xl drop-shadow-2xl transition-all duration-500"
          src={bulb === 'off' ? "/bulboff.png" : "/bulbon.png"}
          alt={bulb}
        />
      </div>

      <button
        onClick={() => setBulb(bulb === 'off' ? 'on' : 'off')}
        className={`px-10 py-4 text-2xl font-semibold rounded-full shadow-lg transition-all duration-300
          ${bulb === 'off'
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-yellow-400 text-black hover:bg-yellow-300'}
        `}
      >
        {bulb === 'off' ? 'Turn On' : 'Turn Off'}
      </button>
    </div>
  )
}

export default App
