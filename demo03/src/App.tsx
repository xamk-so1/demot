import React, { useState } from 'react';
import Laskurinappi from './components/Laskurinappi';
import Otsikko from './components/Otsikko';
import Sivu from './components/Sivu';
import Yhteenveto from './components/Yhteenveto';

const kulkuneuvot : string[] = [
  "Henkilöauto", 
  "Pakettiauto", 
  "Linja-auto",
  "Kuorma-auto tai rekka",
  "Polkupyörä",
  "Moottoripyörä",
  "Sähköpotkulauta",
  "Muu kulkuneuvo"
]

const App : React.FC = () : React.ReactElement => {

  const [yhteensa, setYhteensa] = useState<number>(0);

  const paivitaSumma = () : void => {
    setYhteensa(yhteensa + 1);
  }

  return (
    <Sivu>

      <Otsikko>Demo 3: React-komponentit</Otsikko>

      <Otsikko tyyli="pieni">Liikennelaskuri</Otsikko>

      <Yhteenveto yhteensa={yhteensa}/>

      <>
      {kulkuneuvot.map((kulkuneuvo : string, idx : number) => {
        return (
          <Laskurinappi paivitaSumma={paivitaSumma} key={idx}>{kulkuneuvo}</Laskurinappi>
        );
      })}
      </>

    </Sivu>
  );
}

export default App;
