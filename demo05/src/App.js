import Aloitus from './components/Aloitus';
import Info from './components/Info';
import Valikko from './components/Valikko'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Valikko />
      <Route path="/" exact component={Aloitus} />
      <Route path="/info" component={Info} />      
    </Router>
  );
}

export default App;
