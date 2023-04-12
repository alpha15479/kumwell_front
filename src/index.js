import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import SoundSet from './routes/sound-set/SoundSet'
import AddSound from './routes/sound-set/AddSound'
import Report from './routes/report/Report';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path="SoundSet" element={<SoundSet />} />
                <Route path="SoundSet/AddSound" element={<AddSound />} />
                <Route path="Report" element={<Report />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
