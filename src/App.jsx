import React, { useState} from 'react';
import axios from 'axios';


function App() {
  const [advice, setAdvice] = useState('');
  const [isDone, setDone] = useState(false);


function fetchAdvice() {
    axios.get('https://api.adviceslip.com/advice')
      .then(response => {
        const {advice} = response.data.slip;
        setAdvice(advice);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='app'>
      <div className='card'>
        {isDone ? <h1 className='heading advice'>{advice}</h1> : <h1 className='heading set'>Motivate your days with some advice..</h1>}
        <button className='button' onClick={() => {
          fetchAdvice();
          setDone(true);
        }}><span>GIVE ME ADVICE</span></button>
      </div>
    </div>
)
}

export default App;
