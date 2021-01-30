import { useState } from 'react';
import Laskurinappi from './components/Laskurinappi';
import Otsikko from './components/Otsikko';
import Sivu from './components/Sivu';
import Yhteenveto from './components/Yhteenveto';

function App() {

  const [yhteensa, setYhteensa] = useState(0);

  const lisaaYhteissummaan = () => {

    setYhteensa(yhteensa + 1);

  }

  return (
          <Sivu>

            <Otsikko>Demo 3: React-komponentit</Otsikko>

            <Otsikko tyyli="pieni">Liikennelaskuri</Otsikko>

            <Yhteenveto yhteensa={yhteensa} />

            <Laskurinappi lisaaYhteissummaan={lisaaYhteissummaan}>
              Henkilöauto
            </Laskurinappi>

            <Laskurinappi lisaaYhteissummaan={lisaaYhteissummaan}>
              Pakettiauto
            </Laskurinappi>

            <Laskurinappi lisaaYhteissummaan={lisaaYhteissummaan}>
              Linja-auto
            </Laskurinappi>

            <Laskurinappi lisaaYhteissummaan={lisaaYhteissummaan}>
              Kuorma-auto tai rekka
            </Laskurinappi>

            <Laskurinappi lisaaYhteissummaan={lisaaYhteissummaan}>
              Polkupyörä
            </Laskurinappi>

            <Laskurinappi lisaaYhteissummaan={lisaaYhteissummaan}>
              Moottoripyörä
            </Laskurinappi>

            <Laskurinappi lisaaYhteissummaan={lisaaYhteissummaan}>
              Muu kulkuneuvo
            </Laskurinappi>

          </Sivu>
  );
}

export default App;
