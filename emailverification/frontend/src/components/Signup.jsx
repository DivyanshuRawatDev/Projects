import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeValue = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      toast.success(data?.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });

      console.log("Response Data:", data);

      window.location.href = "/verification"
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Signup Verification</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={changeValue}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={changeValue}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={changeValue}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
