import React, { useState, useEffect } from "react";

const DocumentTitleUpdater = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(e => e += 1);
  };

  
  const decrement = () => {
    setCount(e => e -= 1);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>Naslov ce biti: Count{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default DocumentTitleUpdater;
