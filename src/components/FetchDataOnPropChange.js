import React, { useState, useEffect } from "react";

const FetchDataOnPropChange = () => {
  const [test, setTest] = useState({});
  const [id, setID] = useState('')

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setTest(data);
        console.log('API fetched!', data);
    }

    fetchData();
    
  }, [id]);
  const onChangeHandler = (event)=>{
    setID(event.target.value)
  }


  return (
    <div>
      <p>Api Data za odgovarajuci ID</p>
      <input type="number" placeholder="Enter id" onChange={onChangeHandler}/>
      <div>
        <h3>Title: {test.title}</h3>
        <p>Body: {test.body}</p>
        <p>User ID: {test.id}</p>
      </div>
    </div>
  );
};

export default FetchDataOnPropChange;
