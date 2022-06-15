import React, { useState } from 'react'
import "./App.css";

function App() {
  const [hour, setHour] = useState(24);
  var today = new Date();
  var time = today.getHours();
  var min = today.getMinutes();
  var per = hour == 12 ? ((time % 12) / hour) : (time / hour);
  var perc = (Math.round(per * 100));
  let arr = new Array();
  for (var i = 1; i < hour; i++) {
    arr.push(i);
  }
  return (
    <>
      <div className="input">
        <input placeholder='insert time format 12 or 24' type="number" onChange={(e) => setHour(e.target.value)} style={{ width: "300px" }} />
      </div>
      <div className='app'>
        <div className='app__div'>
          <div className='app__header'>
            <div>
              <h1 style={{ marginBottom: "0px" }}>{time}:{min}</h1>
              <h4 style={{ marginTop: "0px" }}>{hour} hours</h4>
            </div>
            <h1>{perc}%</h1>
          </div>
          {arr.map((val, idx) => (
            <div key={val} className={val <= (hour == 12 ? time % 12 : time) ? "red" : "green"}></div>
          )
          )}
        </div>
      </div>
    </>
  )
}

export default App