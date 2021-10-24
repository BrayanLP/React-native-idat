import React from 'react';
import "./App.scss";
import foto from './assets/foto.png' 
import ModalApp from './components/modal'
import Header from './components/header'
import Search from './components/search'
import Home from './view/home';
import Footer from './components/footer';
function App() {
  
  return (
    <main className="wrapper">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </main>
  );
}

export default App;
