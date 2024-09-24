import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';
import BookPage from './components/BookPage';
import BoxPage from './components/BoxPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/box" element={<BoxPage />} />
      </Routes>
    </Router>
  );
}

export default App;
