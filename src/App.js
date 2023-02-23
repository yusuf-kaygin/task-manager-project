import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-wrapper container">
      <Header />
      {/* ----------------- routes-start ----------------- */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* ----------------- routes-end ------------------- */}
      <Footer />
    </div>
  );
}

export default App;

// TODO basit route yapisi
// Login islemleri vs olsaydi protected route yapisi kurardim
