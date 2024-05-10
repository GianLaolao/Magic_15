import './App.css'
import Grid from './Grid.jsx'
import HowTo from './HowTo.jsx'
import React, { useState, useEffect } from 'react';

function App() {  

  const [turn, setTurn] = useState(1);
  const [num, setNum] = useState(null); 
  const [isDisabled, setDisabled] = useState([false, false, false, false, false, false, false, false, false]);
  const [isEnd, setEnd] = useState(false)
  const [isWin, setWin] = useState();
  const [reset, setReset] = useState(false);

  const handleClick = (event) => {
    const val = event.target.value;
    setNum(val);
  }

  const refresh = function refresh() {
    setReset(prevReset => !prevReset);
    setDisabled([false, false, false, false, false, false, false, false, false]);
  }
  
  useEffect(() => {
      setEnd(false);
      setTurn(1);
  }, [reset])

  return (
    <>
      <div className="cont container">

        <HowTo />
        
        <div className="label mb-5 mt-3">
          <h1 className="turn text-center">Player {turn}
            {isEnd ? (isWin ? " WIN" : " LOSE") : " Turn"}
          </h1>
        </div>
        
        <Grid r={reset} newNum={num} turn={turn} numFunc={setNum} endFunc={setEnd} winFunc={setWin} turnFunc={setTurn} dis={isDisabled} disableFunc={setDisabled}/>

        <div className="container bot mt-5">
            <label className="h3" htmlFor="num">Number: </label>
            <span className="h1" id="number" name="num"> {num}</span>
          <div className="button-cont row gap-3 mt-3">
            <button disabled={isDisabled[0]} className="btn col btn-primary btn-lg" value="1" onClick={handleClick}>1</button>
            <button disabled={isDisabled[1]} className="btn col btn-primary btn-lg" value="2" onClick={handleClick}>2</button>
            <button disabled={isDisabled[2]} className="btn col btn-primary btn-lg" value="3" onClick={handleClick}>3</button>
            <button disabled={isDisabled[3]} className="btn col btn-primary btn-lg" value="4" onClick={handleClick}>4</button>
            <button disabled={isDisabled[4]} className="btn col btn-primary btn-lg" value="5" onClick={handleClick}>5</button>
            <button disabled={isDisabled[5]} className="btn col btn-primary btn-lg" value="6" onClick={handleClick}>6</button>
            <button disabled={isDisabled[6]} className="btn col btn-primary btn-lg" value="7" onClick={handleClick}>7</button>
            <button disabled={isDisabled[7]} className="btn col btn-primary btn-lg" value="8" onClick={handleClick}>8</button>
            <button disabled={isDisabled[8]} className="btn col btn-primary btn-lg" value="9" onClick={handleClick}>9</button>
          </div>
        </div>

        <button className="reset btn btn-danger" onClick={refresh}>Reset</button>
      </div>
    </>
  )
}

export default App
