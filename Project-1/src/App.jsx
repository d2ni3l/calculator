import { useState } from 'react'


function App() {
  const [display, setDisplay] = useState('0')

  const handleNumber = (event) => {
    const number = event.target.textContent;
    if(display === '0'){
      setDisplay(number)
    }else{
      setDisplay(display + number)
    }
  };
  const handleOperator = (event) => {
     const operator = event.target.textContent
     setDisplay(display  + operator );
  }
  const handleEqual = () => {
     setDisplay(eval(display))

     

  }

  const handleDecimal = () => {
    const array = display.split(' ')
    const lastElement = array[array.length - 1];

    if(!lastElement.includes('.')){
      setDisplay(display + '.')
    }
  }
  const handleDel = () => {
    const split = display.slice(0, -1)
    setDisplay(split)
  }

  return (
    <>
    <div className='App'>
      
      <div className="container">
        <div className="header-wrapper">
        <div className="calc-header">
          <h1>Calculator</h1>
          <div className="button-theme">

          </div>
        </div>
        <div id='display' className="display">{display}</div>
        </div>
        
        <div className="grid">
          <button onClick={handleNumber} id="7" className="7">7</button>
          <button onClick={handleNumber} id="8" className="8">8</button>
          <button onClick={handleNumber} id="9" className="9">9</button>
          <button onClick={handleDel} id="Del" className="Del">Del</button>
          <button onClick={handleNumber} id="4" className="4">4</button>
          <button onClick={handleNumber} id="5" className="5">5</button>
          <button onClick={handleNumber} id="6" className="6">6</button>
          <button onClick={handleOperator}  id="+" className="+">+</button>
          <button onClick={handleNumber} id="1" className="1">1</button>
          <button onClick={handleNumber} id="2" className="2">2</button>
          <button onClick={handleNumber} id="3" className="3">3</button>
          <button onClick={handleOperator} id="-" className="-">-</button>
          <button onClick={handleDecimal}  id="." className=".">.</button>
          <button onClick={handleNumber} id="0" className="0">0</button>
          <button onClick={handleOperator}  id="÷" className="/">/</button>
          <button onClick={handleOperator}  id="x" className="x">*</button>
          <button onClick={() => {setDisplay('0')}} >Reset</button>
          <button onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
