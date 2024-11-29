"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import { toast, ToastContainer } from "react-toastify";
// import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const DeletePage = () => {
  const [id, setId] = useState<string | undefined>("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      // axios.defaults.withCredentials = true;
      console.log("username", id);
      const res = await axios.delete(
        `https://dummyjson.com/users/` + id
      );
      //   console.log("Res", res);
        console.log("RES: ", res);
      if (res.status === 200) {
        toast.success("User Deleted Succesfully", {
          autoClose: 2000,
          position: "top-right",
        });
        console.log("RES: ", res);
        setId("");
      } else {
        toast.error("User not found", {
          autoClose: 2000,
          position: "top-right",
        });
      }
      // console.log("Value", { firstName, lName, age });
    } catch (error) {
      console.log(`Error with LoginPage ${error}`);
    }
  };
  return (
    <div className="p-4 bg-gray-200 text-gray-700 mx-auto w-full h-full text-center">
      <div className="m-4 mx-auto">
        <h1 className="text-5xl font-bold">Delete User</h1>
        <p className="my-4">Please enter User&apos;s Id.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[30vw] p-4 rounded-md mx-auto bg-gray-50 h-auto"
      >
        <div className="flex flex-col items-start my-2">
          <label className="font-semibold" htmlFor="name">
            User Id:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-3 border w-full rounded-md border-gray-400"
            placeholder="Enter First Id..."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button
          className="rounded-lg border border-gray-400 bg-gray-100 text-black font-semibold my-2 p-4 mx-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default DeletePage;