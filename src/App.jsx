import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Drag } from './component/drag'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Drag/>
      </DndProvider>
    </div>
  )
}

export default App
