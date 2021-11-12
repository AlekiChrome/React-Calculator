import './App.css';
import { useState } from "react";
import * as math from "mathjs";
import Buttons from "./components/Buttons";
import Display from "./components/Display";


const App = () => {

  const [ text, setText ] = useState("");
  const [ results, setResults ] = useState("0");

  const thisIsText = (value) => {
    setText((text) => [...text, value + ""])
    
  }
  
  /*
    I notice that the text state initalizes as a string but then in the thisIsText function it becomes an array on line 14. I suggest staying with either an array or string.
  */


  const calculations = () => {
    const input = text.join("")
    console.log(input)
    setResults(Math.round(math.evaluate(input)))
  }


  const clearDisplay = () => {
    setText("")
    setResults("0")
  }

  const posNeg = () => {
    let num = parseInt(results);
  
    setResults((num * -1).toString());

    setText(num.toString());
  }
  
  const colorSwitch = "rgb(51, 51, 51)";
  
  /* 
    This looks great! You can dry out your code by storing it as am array of arrays too.
    let content = [
      [
        { symbol: "7", handleClick: thisIsText },
        { symbol: "8", handleClick: thisIsText },
        { symbol: "9", handleClick: thisIsText },
        { symbol: "/", color:{colorSwitch}, handleClick: thisIsText }
      ],
      [...],
      [...]
    ]
    
    You can then recreate your elements by mapping though both arrays like so.
    
    let contentElements = content.map((row)=>{
      let rowRender = row.map((element)=>{
        return <Buttons symbol={element.symbol} handleClick={element.handleClick}/>
      })
      return <div className="button-row">{rowRender}</div>
    })
    
    This is just a incomplete sample example of how it would look. If you're interested in a challenge you're welcome to try to get this working.
  
  */

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
          <Buttons symbol="ac" handleClick={clearDisplay} />
          <Buttons symbol="." handleClick={thisIsText}/>
          <Buttons symbol="0" handleClick={thisIsText}/>
          <Buttons symbol="-" color={colorSwitch} handleClick={thisIsText}/>
          <Buttons symbol="±" color={colorSwitch}  handleClick={posNeg} />
        </div>

          <Buttons symbol="=" color="rgb(156, 177, 237)" handleClick={calculations}/>




      </div>
    </div>
  );
}

export default App;
