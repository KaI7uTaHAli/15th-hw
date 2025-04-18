import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} /> {/* Новый маршрут */}
      </Routes>
    </Router>
  );
}




export default App;

