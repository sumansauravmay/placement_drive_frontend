import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Infinite = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getData = () => {
    fetch(
      `https://myindiaa-deployement.onrender.com/products?page=2&_limit=10`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res-data", res);
        if (res.length == 0) {
          setHasMore(false);
        }else{
          console.log("Fetched data for page:", page, res);
          setData((prevData)=>[...prevData, ...res])
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [page]);

  const fetchData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {data.map((item) => (
        <div key={item.id}>
          <img height="200px" src={item.image} alt="pic" />
          <h1>{item.title}</h1>
          <h5>{item.price}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default Infinite;
