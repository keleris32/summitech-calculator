import './App.css';
import { useOperations } from './useOperations';

function App() {
  const [result, handleClick, clearResult] = useOperations();

  return (
    <div className="App">
      <div className="calculator">
        <form className="output">
          <input type="text" value={result} />
        </form>
        <div className="key-pad">
          <button name="7" onClick={handleClick} className="digit-7">7</button>
          <button name="8" onClick={handleClick} className="digit-8">8</button>
          <button name="9" onClick={handleClick} className="digit-9">9</button>
          <button name="/" onClick={handleClick} className="op-div">&divide;</button>
          <button name="4" onClick={handleClick} className="digit-4">4</button>
          <button name="5" onClick={handleClick} className="digit-5">5</button>
          <button name="6" onClick={handleClick} className="digit-6">6</button>
          <button name="*" onClick={handleClick} className="op-mul">&times;</button>
          <button name="1" onClick={handleClick} className="digit-1">1</button>
          <button name="2" onClick={handleClick} className="digit-2">2</button>
          <button name="3" onClick={handleClick} className="digit-3">3</button>
          <button name="-" onClick={handleClick} className="op-sub">&ndash;</button>
          <button name="0" onClick={handleClick} className="digit-0">0</button>
          <button onClick={clearResult} className="clear">C</button>
          <button onClick={handleClick} className="eq">=</button>
          <button name="+" onClick={handleClick} className="op-add">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
