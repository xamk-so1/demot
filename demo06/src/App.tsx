import React, { useState } from 'react';
import Otsikko from './components/Otsikko';
import UusiTehtava from './components/UusiTehtava';
import Tehtavalista from './components/Tehtavalista';
import { Route, Routes } from 'react-router-dom';
import PoistaTehtava from './components/PoistaTehtava';

interface Tehtava {
  nimi : string,
  tehty : boolean
}

const App : React.FC = () : React.ReactElement => {

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

  return (
    <>

      <Otsikko>Demo 6: Reititysparametrit</Otsikko>

      <Routes>

        <Route path="/poista/:indeksi" element={<PoistaTehtava tehtavat={tehtavat} setTehtavat={setTehtavat} />}  />

        <Route path="/uusi" element={<UusiTehtava tehtavat={tehtavat} setTehtavat={setTehtavat} />}  />

        <Route path="/" element={<Tehtavalista tehtavat={tehtavat} setTehtavat={setTehtavat} />} />

      </Routes>



    </>
  );
}

export default App;