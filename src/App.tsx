import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Plants } from './plants'
import { PlantCard } from './components/PlantCard';

function App() {
  const [count, setCount] = useState(0)

  const plants = Plants.map(plant => PlantCard({ plant }));

  return (
    <>
      <h1>PvZ2 Almanac</h1>
      <div className="cards">
        <div className="card-columns">
          {plants}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
