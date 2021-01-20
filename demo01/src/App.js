import { useState } from 'react';
import './App.css';

function App() {

  const [tervehdys, setTervehdys] = useState();
  const [nimi, setNimi] = useState("tuntematon");

  const sanoHeippa = () => {

    setTervehdys(`Heippa, ${nimi}!`);

  }

  return (
    <div>

      <h1>Demo 1: React-perusteita</h1>

      <h2>"Hello world"</h2>

      <input 
          type="text" 
          placeholder="Anna nimesi..." 
          onChange={ (e) => { 
                              setNimi(e.target.value) 
                            } 
                   } 
      />

      <button onClick={sanoHeippa} >Sano heippa</button>

      { (tervehdys) 
        ? <div className="viesti">
          {tervehdys}
          </div>
        : null
      }

      

    </div>
  );
}

export default App;
