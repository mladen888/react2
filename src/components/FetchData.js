import React, { useState, useEffect } from "react";

const LogOnMount = () => {
  const [test, setTest] = useState({});

  useEffect(() => {
    async function fetchData() {
     
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        setTest(data);
        console.log('API fetched!', data);
      
       
    }

    fetchData();
  }, []);

  return (
    <div>
      <p>Fetching API Data...</p>
    </div>
  );
};

export default LogOnMount;
