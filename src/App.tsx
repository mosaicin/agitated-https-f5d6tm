import { useState } from 'react';

interface CounterProps {
}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(97);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-3xl font-bold">
        {count}
      </div>
      <div className="flex mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;