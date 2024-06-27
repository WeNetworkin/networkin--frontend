import React from "react";
import Login from "./app/login/Login";
import Register from "./app/register/Register";
function App() {
  return (
    <div className="flex gap-10 m-6 h-full">
      <Login />
      <Register />
    </div>
  );
}

export default App;
