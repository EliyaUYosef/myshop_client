import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// require("dotenv").config();

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import "./styles/App.css";
import ProductsPage from "./pages/ProductsPage";
import TestPage from "./pages/TestPage";
import "./styles/index.css";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/category/:categoryId" element={<ProductsPage />} />
            <Route path="/testPage" element={<TestPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
