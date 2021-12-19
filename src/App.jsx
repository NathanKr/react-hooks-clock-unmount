import {useState} from 'react'
import Clock from './components/Clock'
import './App.css'

const App = () => {
  const [showClock, setShowClock] = useState(true);

  return (
    <div className='App' onClick={() => setShowClock(!showClock)}>
      <h3>watch the browser tab ticks</h3>
      <p>click the clock to stop it via hooks unmount</p>
      {showClock ? <Clock /> : ''}
    </div>
  );
};

export default App;
