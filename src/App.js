import React from 'react';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import { Container } from "semantic-ui-react"; 

function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
