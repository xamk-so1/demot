import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aloitus from './components/Aloitus';
import Info from './components/Info';
import Valikko from './components/Valikko';

const App : React.FC = () : React.ReactElement => {
  return (
    <>
    <Valikko/>
    <Routes>
      <Route path="/" element={<Aloitus />} />
      <Route path="/info" element={<Info />} />
    </Routes>
    </>
  );
}

export default App;
