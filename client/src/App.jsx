// "http://localhost:8080/cakes";
// "https://watchtv-wk4-assignment-server.onrender.com/cakes";
// Make sure urls match

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";

export default function App() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    async function getCakes() {
      const response = await fetch("http://localhost:8080/cakes");
      const data = await response.json();
      setCakes(data);
      console.log(data);
    }

    getCakes();
  }, []);

  return (
    <BrowserRouter>
      <main>
        <div className="link-container">
          <nav>
            <Link to="/">Go to Home</Link> |
            <Link to="/form">Join in! Post your bakes here</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
        <footer>Copyright 2024</footer>
      </main>
    </BrowserRouter>
  );
}
