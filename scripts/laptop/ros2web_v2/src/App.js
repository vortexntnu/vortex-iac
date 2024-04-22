import React, { useState, useEffect } from 'react';
import ROSLIB from 'roslib';

import './App.css';

import NAVBAR from './components/navbar/navbar.js';
import VIEW from './components/view/view.js';

function App() {
  const ros = new ROSLIB.Ros({
    url: 'ws://10.0.0.133:9090'
  });

  ros.on('connection', () => { console.log('Connected to websocket!') });
  ros.on('error', (err) => { console.log('Error connecting to websocket :( ', err) });
  ros.on('close', () => { console.log('Connection to websocket closed.') });

  const [views, setViews] = useState([]);

  const addView = (view) => !views.includes(view) ? setViews(oldViews => [...oldViews, view]) : console.log("Topic allready exists")
  const removeView = (view) => setViews(views.filter(item => item.topic !== view))

  return (
    <div className="App">
      <NAVBAR header="ros2web" addView={addView} ros={ros} />
  
      <main className="Feeds">
        { views.length 
          ? views.map(view => { return <VIEW topic={view.topic} type={view.type} removeFunction={removeView} ros={ros} />}) 
          : console.log("Nothing to show...")
        }
      </main>   
    </div>
  );
}

export default App;
