import React, { useState, useEffect } from 'react';
import Knob from './components/knob.js'
import Slider from './components/slider.js'
import './App.css';

function App() {
  //const [count, setCount] = useState(50);
  const [panLevel, setPanLevel] = useState(50);

  //var panLevel=50;
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${panLevel} times`;
    });

    /* useEffect(() => {
      console.log('Do something after counter has changed', panLevel);
      //setCount(panLevel)
   }, [panLevel]); */


    function handleChangePan(e){
      setPanLevel(e)
      console.log("emit:", panLevel)
    }

    function changePan(e){
      
      if (panLevel + 10>100){
        setPanLevel(0)
      } else {
        setPanLevel(panLevel+10)
      }
      
      
    }

  return (
    <div className="App">
      <header className="App-header">
        hello world
        <div className='mixer'>
          <div key={1} className='vStrip'>
            <Knob size={150} value={panLevel} handleChangePan = {(e) => handleChangePan(e)}/>
{/*             <Knob size={100} />     */}
          </div>
{/*           <div key={2} className='vStrip'>
            <Knob size={150} />
            <Knob size={100} />    
          </div>
          <div key={3} className='vStrip'>
            <Knob size={150} />
            <Knob size={100} />    
          </div> */}
        </div>    
        {/* <button onClick={() => setCount(panLevel + 10)}>CLICK ME TO INCREMENT BY 10</button> */}
        <button onClick={(e) => changePan(e)}>CLICK ME TO INCREMENT BY 10</button>
      </header>
    </div>
  );
}

export default App;
