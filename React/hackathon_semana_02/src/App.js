import React from 'react';
import "./App.scss";
import foto from './assets/foto.png' 
import ModalApp from './components/modal'
import Header from './components/header'
import Search from './components/search'
function App() {
  
  return (
    <main className="wrapper">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col orange">
            <h1>Connect to people, <br/>not platforms.</h1>
            <p>
              Person- mediate health data exchange<br/> is the future of Health It
              and precision medicine <br/>YouBase was built to take us there
            </p>
            <Search></Search>
          </div>
          <div className="col blue">
            <img width='500' src={foto} alt="" />
          </div>
        </div>
      </div>
      
      <ModalApp  ></ModalApp>
      
    </main>
  );
}

export default App;
