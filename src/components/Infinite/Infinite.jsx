import React, { useEffect, useState } from "react";

const Infinite = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(`https://myindiaa-deployement.onrender.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log("res-data", res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img height="200px" src={item.image} alt="pic" />
          <h1>{item.title}</h1>
          <h5>{item.price}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Infinite;
