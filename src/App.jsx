import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegLog from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<RegLog />} />
          <Route exact path="/user/register" element={<Register />} />
          <Route exact path="/user/login" element={<Login />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
