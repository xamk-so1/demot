import React, { useState } from 'react';
import Otsikko from './components/Otsikko';
import UusiTehtava from './components/UusiTehtava';
import Tehtavalista from './components/Tehtavalista';
import { Route, Routes } from 'react-router-dom';
import PoistaTehtava from './components/PoistaTehtava';

const App : React.FC = () : React.ReactElement => {

  const [tehtavat, setTehtavat] = useState<Tehtava[]>([
                                          {
                                            nimi : "Käy kaupassa", 
                                            deadline : new Date(),
                                            tehty : false
                                          },
                                          {
                                            nimi : "Siivoa", 
                                            deadline : new Date(),
                                            tehty : true
                                          },
                                          {
                                            nimi : "Ulkoiluta koiraa", 
                                            deadline : new Date(),
                                            tehty : false
                                          }
                                        ]);

  return (
    <>

      <Otsikko>Demo 8: Päivämäärien käsittely</Otsikko>

      <Routes>

        <Route path="/poista/:indeksi" element={<PoistaTehtava tehtavat={tehtavat} setTehtavat={setTehtavat} />}  />

        <Route path="/uusi" element={<UusiTehtava tehtavat={tehtavat} setTehtavat={setTehtavat} />}  />

        <Route path="/" element={<Tehtavalista tehtavat={tehtavat} setTehtavat={setTehtavat} />} />

      </Routes>



    </>
  );
}

export default App;