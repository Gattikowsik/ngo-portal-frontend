// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';

// Page Components
import HomePage from './pages/HomePage';
import NgoListPage from './pages/NgoListPage';
import PostNgoPage from './pages/PostNgoPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Feature Components
import BrowseNGOs from './components/BrowseNGOs/BrowseNGOs';
import BrowsePosts from './components/BrowsePosts/BrowsePosts';

// Styles
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-ngo" element={<PostNgoPage />} />
            <Route path="/ngos" element={<BrowseNGOs />} />
            <Route path="/browse-ngos" element={<BrowseNGOs />} />
            <Route path="/ngo-list" element={<NgoListPage />} />
            <Route path="/posts" element={<BrowsePosts />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
  </main>
      </div>
    </Router>
  );
}

export default App;