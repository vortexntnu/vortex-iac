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

  const addView = (item) => {
    setViews(oldViews => [...oldViews, item]);
  }

  const removeView = (e) => {
    const name = e.target.id("name");
    setViews(views.filter(item => item !== name));
  }

  useEffect(() => {
    // render views / feeds
  }, [views])

  return (
    <div className="App">
      <NAVBAR header="ros2web" addView={addView} ros={ros} />

      <main className="Feeds">
        <VIEW title="test_topic_1" />
        <VIEW title="test_topic_2" />
        <VIEW title="test_topic_3" />
      </main>
    </div>
  );
}

export default App;
