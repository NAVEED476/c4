import { useState } from 'react'
import './App.css'
import {SearchPage} from './searchpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
    
      <SearchPage/>
    </div>
  )
}

export default App
