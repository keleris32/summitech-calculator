import { useState, useEffect } from 'react';

export const useOperations = () => {
  const [input, setInput] = useState('');
  const [previousState, setPreviousState] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [operator, setOperator] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  // const [result, setResult] = useState(false);

  //  To handle logic after button press
  const handleDigit = (e) => {
    const digit = e.target.innerText;

    // If the previousState is empty and the digit clicked is "0", do nothing.
    if (input === '' && digit === '0') return;

    // If input is empty, append the value of each digit to the input;
    if (input === '') {
      setCurrentState(digit);
      setInput(digit);
    } else {
      setCurrentState((prevInput) => prevInput + digit);
      setInput((prevInput) => prevInput + digit);
    }

    if (input.length > 10) return;
  };

  const handleOperator = (e) => {
    const operatorDigit = e.target.innerText;

    // If the display is empty and value of the Button press = "-", set the display to operatorAigit
    if (input === '' && operatorDigit === '-') {
      setInput(operatorDigit);
    } else return;

    if (currentState !== '' && operator !== '') {
      setOperator(operatorDigit);
      setInput(currentState + operatorDigit);
      setPreviousState(currentState);
      setCurrentState('');
    } else {
      setInput(previousState + operatorDigit);
      setOperator(operatorDigit);
    }

    if (currentState === '' && operatorDigit === '-' && operator !== '-') {
      setInput(previousState + operator + operatorDigit);
      setCurrentState(operatorDigit);
      setDisableBtn(true);
    } else return;

    if (input === '' && operatorDigit === '-') {
      setInput(operatorDigit);
    } else return;
  };

  const clearResult = () => {
    setInput('');
    setPreviousState('');
    setCurrentState('');
    setOperator(null);
    setDisableBtn(false);

    console.log(currentState);
  };

  const calculateResult = () => {
    // setResult(eval(result).toString());
    console.log(`PreviousState = ${previousState}`);
    console.log(`Operator = ${operator}`);
    console.log(`currentState = ${currentState}`);
    console.log(`disableBtn = ${disableBtn}`);

    if (previousState !== '' && operator !== '' && currentState !== '') {
      let calculate;
      switch (operator) {
        case '/':
          calculate = String(
            Math.floor(parseInt(previousState) / parseInt(currentState))
          );
          break;

        case '+':
          calculate = String(parseInt(previousState) + parseInt(currentState));
          break;

        case 'x':
          calculate = String(parseInt(previousState) * parseInt(currentState));
          break;

        case '-':
          calculate = String(parseInt(previousState) - parseInt(currentState));
          break;

        default:
          return;
      }

      setInput(calculate);
      setPreviousState('');
      setCurrentState('');
      setOperator(null);
      setDisableBtn(true);
    }
  };

  return [
    input,
    disableBtn,
    handleDigit,
    handleOperator,
    clearResult,
    calculateResult,
  ];
};
