import React, { useState, useRef, MutableRefObject } from 'react';
import './App.css';

interface Tehtava {
  nimi : string,
  tehty : boolean
}

const App : React.FC = () : React.ReactElement => {

  const uusiTehtava : MutableRefObject<any> = useRef<HTMLInputElement>();

  const [tehtavat, setTehtavat] = useState<Tehtava[]>([
                                          {
                                            nimi : "Käy kaupassa", 
                                            tehty : false
                                          },
                                          {
                                            nimi : "Siivoa", 
                                            tehty : true
                                          },
                                          {
                                            nimi : "Ulkoiluta koiraa", 
                                            tehty : false
                                          }
                                        ]);
  
  const lisaaTehtava = (tehtavanNimi : string) : void => {

    let uusiTehtava : Tehtava = {
      nimi : tehtavanNimi,
      tehty : false
    }

    setTehtavat([...tehtavat, uusiTehtava]);
  }

  const merkitseTehdyksi = (indeksi : number) : void => {

    let tehtavatApu : Tehtava[] = [...tehtavat];

    tehtavatApu[indeksi].tehty = !tehtavatApu[indeksi].tehty;

    setTehtavat(tehtavatApu);

  }

  return (
    <>

      <h1>Demo 2: React-perusteita</h1>

      <h2>Tehtävälista</h2>

      <input 
        ref={uusiTehtava}
        type="text" 
        placeholder="Kirjoita tehtävä ja paina enter..."
        onKeyDown={(e : any) => {
          if (e.key === "Enter") {
            lisaaTehtava(e.target.value);
            e.target.value = null;
          }
        }}
      />

      <button onClick={ (e) => { 
          lisaaTehtava(uusiTehtava.current.value) 
          uusiTehtava.current.value = null;   
      }}>Lisää</button>

      <ul>

      {tehtavat.map( (tehtava : Tehtava, idx : number) => {

        return (
                  <li key={idx} onClick={() => { merkitseTehdyksi(idx); }}>
                    { (tehtava.tehty === true) 
                      ? <del>{tehtava.nimi}</del> 
                      : tehtava.nimi 
                    }
                  </li>
        );

      } )}

      </ul>

      <p><small>Klikkaa tehtävän nimeä merkitäksesi sen suoritetuksi.</small></p>

    </>
  );
}

export default App;
