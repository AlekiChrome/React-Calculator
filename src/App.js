import './App.css';
import { useState } from "react";
import * as math from "mathjs";
import NumberFormat from 'react-number-format';
import Buttons from "./components/Buttons";
import Display from "./components/Display";


const App = () => {

  const [ text, setText ] = useState("");
  const [ results, setResults ] = useState("");

  const thisIsText = (value) => {
    setText((text) => [...text, value + ""])
  }

  const calculations = () => {
    const input = text.join("")
    console.log(input)
    console.log(input.length)
    setResults(math.evaluate(input))
  }


  const clearDisplay = () => {
    setText("")
    setResults("")
  }

  const colorSwitch = "rgb(51, 51, 51)";

  return (
    <div className="App">
      <div className="calc-main">
        <Display text={text} results={results} />
        <div className="button-row">
          <Buttons symbol="7" handleClick={thisIsText}/>
          <Buttons symbol="8" handleClick={thisIsText}/>
          <Buttons symbol="9" handleClick={thisIsText}/>
          <Buttons symbol="/" color={colorSwitch} handleClick={thisIsText}/>
        </div>

        <div className="button-row">
          <Buttons symbol="4" handleClick={thisIsText}/>
          <Buttons symbol="5" handleClick={thisIsText}/>
          <Buttons symbol="6" handleClick={thisIsText}/>
          <Buttons symbol="*" color={colorSwitch} handleClick={thisIsText}/>
        </div>

        <div className="button-row">
          <Buttons symbol="1" handleClick={thisIsText}/>
          <Buttons symbol="2" handleClick={thisIsText}/>
          <Buttons symbol="3" handleClick={thisIsText}/>
          <Buttons symbol="+" color={colorSwitch} handleClick={thisIsText}/>
        </div>

        <div className="button-row">
          <Buttons symbol="0" handleClick={thisIsText}/>
          <Buttons symbol="." handleClick={thisIsText}/>
          <Buttons symbol="=" handleClick={calculations}/>
          <Buttons symbol="-" color={colorSwitch} handleClick={thisIsText}/>
        </div>

          <Buttons symbol="Clear" color="rgb(156, 177, 237)" handleClick={clearDisplay}/>



      </div>
    </div>
  );
}

export default App;
