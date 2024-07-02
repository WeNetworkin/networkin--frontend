import React from "react";
import Login from "./app/login/Login";
import Register from "./app/register/Register";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="flex flex-col gap-10 m-6 h-full">
      <Navbar />
      <div className="flex">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
