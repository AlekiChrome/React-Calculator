import './App.css';
import Buttons from "./components/Buttons";
import Display from "./components/Display";


const App = () => {

  const colorSwitch = "rgb(51, 51, 51)";

  return (
    <div className="App">
      <div className="calc-main">
        <Display />
        <div className="button-row">
          <Buttons symbol="7"/>
          <Buttons symbol="8"/>
          <Buttons symbol="9"/>
          <Buttons symbol="/" color={colorSwitch} />
        </div>

        <div className="button-row">
          <Buttons symbol="4"/>
          <Buttons symbol="5"/>
          <Buttons symbol="6"/>
          <Buttons symbol="*" color={colorSwitch}/>
        </div>

        <div className="button-row">
          <Buttons symbol="1"/>
          <Buttons symbol="2"/>
          <Buttons symbol="3"/>
          <Buttons symbol="+" color={colorSwitch}/>
        </div>

        <div className="button-row">
          <Buttons symbol="0"/>
          <Buttons symbol="."/>
          <Buttons symbol="="/>
          <Buttons symbol="-" color={colorSwitch}/>
        </div>

        <Buttons symbol="Clear" color="rgb(156, 177, 237)"/>

      </div>
    </div>
  );
}

export default App;
