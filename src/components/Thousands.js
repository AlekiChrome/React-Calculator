import React from 'react'

 const Thousands = results => {
  let output = "";
  let decimal = "";
  let negative = false;
  if (results.includes === (".")) {
    output = results.substring(0, results.indexOf("."));
    decimal = results.substring(results.indexOf("."));
  } else {
    output = results;
  }
  if (parseFloat(results) < 0) {
    negative = true;
    output = output.substring(1);
  }
  return negative ? "-" + parseFloat(output).toLocaleString() + decimal : parseFloat(output).toLocaleString() + decimal
};


export default Thousands;
