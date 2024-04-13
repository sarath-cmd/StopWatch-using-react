import { useState } from 'react';
import './App.css';

function App() {

  const [Sec, setSec] = useState(0)
  const [Min, setMin] = useState(0)
  const [Hour, setHour] = useState(0)
  const [StartControl, setStartControl] = useState(true)

  const handleStart = () => {
    window.timesec = setInterval (() => {
      setSec((Sec) => Sec + 1)}, 1000);
    window.timemin = setInterval (() => {
      setMin((Min) => Min + 1)}, 60000);
    window.timehrs = setInterval (() => {
      setHour((Hour) => Hour + 1)}, 3600000);
    setStartControl(false)
  }

  const handleStop = () => {
    clearInterval(window.timesec)
    clearInterval(window.timemin)
    clearInterval(window.timehrs)
    setStartControl(true)
  }

  const handleReset = () => {
    clearInterval(window.timesec)
    setSec(0)
    clearInterval(window.timemin)
    setMin(0)
    clearInterval(window.timehrs)
    setHour(0)
    setStartControl(true)
  }
  
  return (
    <div>
      <h1>STOP WATCH</h1>
      <br />
      <div className="spandiv">
        <span>{Hour} Hrs</span>
        <span>{Min % 60} Mins</span>
        <span>{Sec % 60} Secs</span>
      </div>
      <br />
      <div className="btndiv">
        {StartControl && <button onClick={handleStart}>START</button>}
        <button onClick={handleStop}>STOP</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}

export default App;
