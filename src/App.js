import React,{useState} from 'react';
import './App.css';
// import ButtonComponent from './stopwatch/btncomponent';
// import Displaycomponent from './stopwatch/dispcomponent';
import Lifecycle from './src1/lifecycle'
import List from './src1/todolist'

function App() {
  const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const start=()=>{
    run();
    setInterval(run,10)
  };
  const stop=()=>{
    clearInterval(run)
  }
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Displaycomponent time={time} />
        <ButtonComponent start={start} stope={stop} /> */}
        <List />
      </header>
    </div>
  );
}

export default App;
