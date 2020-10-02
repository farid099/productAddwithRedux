import React from 'react';
import './App.css';
import {Container} from "reactstrap";
import Navb from '../nav/Navb';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <Container>
        <Navb></Navb>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
