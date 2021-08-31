import React, { useState, useEffect } from "react";

const Counter = () => {
    const [inputNumber, setInputNumber] = useState(0)
    const [answer, setAnswer] = useState(0)

    
    useEffect(() => {
        console.log("use effect triggered")
        setInputNumber(inputNumber +1)
    }, [answer])

    const handleInc = () => {
    
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        setAnswer("fizzbuzz")
      } else if (inputNumber % 3 === 0) {
        setAnswer("fizz")
      } else if (inputNumber % 5 === 0) {
        setAnswer("buzz")
      } else {
        setAnswer(inputNumber);
      }
   
    }
    return (
    <>
    <h2>Your Number is: {answer} </h2>
    <button onClick={handleInc}>Increase number</button>
    </>
    )
}

export default Counter