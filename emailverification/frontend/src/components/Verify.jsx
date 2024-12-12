import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Verify = () => {
  const [data, setData] = useState({});

  const changeData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return toast.error("wrong code, not verified", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
      }

      const newData = await response.json();
      toast.success(newData?.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Verify your OTP</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={changeData}
        />
        <input
          type="text"
          placeholder="Verification code"
          name="code"
          onChange={changeData}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Verify;
