import { useState } from 'react';

export const useOperations = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clearResult = () => {
    setResult('');
  };

  return [result, handleClick, clearResult];
};
