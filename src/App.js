import './App.css';
import Buttons from "./components/Buttons";


const App = () => {
  return (
    <div className="App">
      <div className="calc-main">
        
        <div className="button-row">
          <Buttons symbol="7"/>
          <Buttons symbol="8"/>
          <Buttons symbol="9"/>
          <Buttons symbol="/"/>
        </div>

        <div className="button-row">
          <Buttons symbol="4"/>
          <Buttons symbol="5"/>
          <Buttons symbol="6"/>
          <Buttons symbol="*"/>
        </div>

        <div className="button-row">
          <Buttons symbol="1"/>
          <Buttons symbol="2"/>
          <Buttons symbol="3"/>
          <Buttons symbol="+"/>
        </div>

        <div className="button-row">
          <Buttons symbol="0"/>
          <Buttons symbol="."/>
          <Buttons symbol="="/>
          <Buttons symbol="-"/>
        </div>

      </div>
    </div>
  );
}

export default App;
