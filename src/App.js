// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch를 Routes로 변경
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PhotoDetailPage from './pages/PhotoDetailPage';

const App = () => {
    return (
        <Router>
            <Routes> {/* Switch를 Routes로 변경 */}
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/photo/:id" element={<PhotoDetailPage />} />
            </Routes>
        </Router>
    );
};

export default App;