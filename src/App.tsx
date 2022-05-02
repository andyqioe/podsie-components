import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Plant from './components/Plant'
import SimpleBackdrop from './components/onSubmit/onSubmit'; 
import { Slider } from '@material-ui/core'


function App() {
  const [count, setCount] = useState(50);
  const [plantLvl, setLvl] = useState(1);
  const [open, setOpen] = useState(false);

  function countOrLevel() {
    setOpen(true);

    if ((count + 10) == 100) {
      setCount((count) => (count + 10) % 100)
      setLvl((plantLvl) => (plantLvl + 1))
    }
    else {
      setCount((count) => (count + 10) % 100)
      console.log(count)
    }
  }

  // Delete and remove from div when done.
  const tmpStyle = {
    tmp: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
  
  
  //-------------------------------

  return (
    <div style={tmpStyle.tmp}>
      <Plant progressPercent={count} level={plantLvl}/> 
    </div>
  )
  /* <SimpleBackdrop toggle={() => countOrLevel()} close={() => {setOpen(false)}} isOpen={open} /> */
  /* // Circular Component
  return (
    <div className="App">
      <Plant progressPercent={count} level={plantLvl}/> 
      <SimpleBackdrop toggle={() => countOrLevel()} close={() => {setOpen(false)}} isOpen={open} />
    </div>
  ) */
}

export default App
