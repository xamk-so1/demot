import React, { useEffect, useRef, useState } from 'react';
import Otsikko from './components/Otsikko';
import UusiTehtava from './components/UusiTehtava';
import Tehtavalista from './components/Tehtavalista';
import { Route, Routes } from 'react-router-dom';
import PoistaTehtava from './components/PoistaTehtava';

const App : React.FC = () : React.ReactElement => {

  const kaynnistetty : React.MutableRefObject<boolean> = useRef(false);

  const [tehtavat, setTehtavat] = useState<Tehtava[]>([]);

  useEffect(() => {

    if (!kaynnistetty.current)  {

      if (localStorage.getItem("tehtavalista")) {

        setTehtavat(JSON.parse(String(localStorage.getItem("tehtavalista"))).map((tehtava : Tehtava) => {
          return {
            ...tehtava,
            deadline : new Date(tehtava.deadline)
          }
        }))
      }

    }

    return () => {
      kaynnistetty.current = true;
    }

  }, []);

  useEffect(() => {

    localStorage.setItem("tehtavalista", JSON.stringify(tehtavat));

  }, [tehtavat]);

  return (
    <>

      <Otsikko>Demo 9: Tietojen tallentaminen</Otsikko>

      <Routes>

        <Route path="/poista/:id" element={<PoistaTehtava tehtavat={tehtavat} setTehtavat={setTehtavat} />}  />

        <Route path="/uusi" element={<UusiTehtava tehtavat={tehtavat} setTehtavat={setTehtavat} />}  />

        <Route path="/" element={<Tehtavalista tehtavat={tehtavat} setTehtavat={setTehtavat} />} />

      </Routes>



    </>
  );
}

export default App;