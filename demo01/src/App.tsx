import React, { useState } from 'react';
import './App.css';

const App : React.FC = () : React.ReactElement => {

  const [tervehdys, setTervehdys] = useState<string>("");
  const [nimi, setNimi] = useState<string>("");

  const sanoHeippa = () : void => {

    setTervehdys(`Tervehdys, ${nimi}!`);

  }

  return (
    <>
    
      <h1>Demo 1: React-perusteita</h1>
      
      <h2>"Hello world!"</h2>

      <input type="text" placeholder="Anna nimesi..." onChange={ ( e ) => { setNimi(e.target.value) } } />

      <button onClick={sanoHeippa}>Sano heippa</button>

      {(Boolean(tervehdys)) 
        ? <div className="tervehdysteksti">
            {tervehdys}
          </div> 
        : null
      }

      
    </>
  );
}

export default App;
