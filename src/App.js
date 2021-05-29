import './App.css';
import { useOperations } from './useOperations';

function App() {
  // Custom hook to abstract calculator logic
  const [
    input,
    disableBtn,
    handleDigit,
    handleOperator,
    clearResult,
    calculateResult,
  ] = useOperations();

  return (
    <div className="App">
      <div className="calculator">
        <div className="output">{input}</div>
        <div className="key-pad">
          <button onClick={handleDigit}>7</button>
          <button onClick={handleDigit}>8</button>
          <button onClick={handleDigit}>9</button>
          {disableBtn ? (
            <button disabled={true} onClick={handleOperator} className="op-btn">
              /
            </button>
          ) : (
            <button onClick={handleOperator} className="op-btn">
              /
            </button>
          )}
          <button onClick={handleDigit}>4</button>
          <button onClick={handleDigit}>5</button>
          <button onClick={handleDigit}>6</button>
          {disableBtn ? (
            <button disabled={true} onClick={handleOperator} className="op-btn">
              x
            </button>
          ) : (
            <button onClick={handleOperator} className="op-btn">
              x
            </button>
          )}
          <button onClick={handleDigit}>1</button>
          <button onClick={handleDigit}>2</button>
          <button onClick={handleDigit}>3</button>
          {disableBtn ? (
            <button disabled={true} onClick={handleOperator} className="op-btn">
              -
            </button>
          ) : (
            <button onClick={handleOperator} className="op-btn">
              -
            </button>
          )}
          <button onClick={handleDigit}>0</button>
          <button onClick={clearResult} className="sp-btn">
            C
          </button>
          <button onClick={calculateResult} className="sp-btn">
            =
          </button>
          {disableBtn ? (
            <button disabled={true} onClick={handleOperator} className="op-btn">
              +
            </button>
          ) : (
            <button onClick={handleOperator} className="op-btn">
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
