import React, { useState } from 'react';

const FunctionalComponent = ({ title, initialCount = 0 }) => {
  // Khởi tạo state bằng hook useState
  const [count, setCount] = useState(initialCount);
  const [inputText, setInputText] = useState('');

  // Xử lý tăng/giảm count
  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);

  // Xử lý nhập liệu
  const handleInputChange = (e) => setInputText(e.target.value);

  return (
    <div className="component functional">
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <input 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Nhập gì đó..."
      />
      <p>Bạn đã nhập: {inputText}</p>
    </div>
  );
};
export default FunctionalComponent;