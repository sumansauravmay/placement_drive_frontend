import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    if (!name || !email || !password) {
      alert("please check input!");
    } else {
      console.log("data", data);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">signup</button>
    </form>
  );
};

export default Signup;
