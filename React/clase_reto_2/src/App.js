import logo from './logo.svg';
import './App.css';
import beijin from './assets/beijing.svg';
import rome from './assets/colosseum.svg';
import paris from './assets/eiffel-tower.svg';
import moscow from './assets/moscow.svg';

function App() {
  return (
    <div className="App">
      <div className="box purple">
        <div className="group">
        <p>TRAVEL</p>
        <img width='80' src={moscow} alt="" />
        <h3>Moscow</h3>
        </div>
      </div>
      <div className="box blue">
        <div className="group">
        <p>TRAVEL</p>
        <img  width='80' src={beijin} alt="" />
        <h3>Istambul</h3>
        </div>
      </div>
      <div className="box skyblue">
        <div className="group">
        <p>TRAVEL</p>
        <img  width='80' src={rome} alt="" />
        <h3>Rome</h3>
        </div>
      </div>
      <div className="box green">
        <div className="group">
        <p>TRAVEL</p>
        <img  width='80' src={paris} alt="" />
        <h3>Paris</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
