import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/authentication/login';
import OtpVerification from './components/authentication/otpVerifications';
import SignUp from './components/authentication/signup';
import Dashboard from './components/dashboard';
import AudioFiles from './components/audioFiles';
import VideoFiles from './components/videoFiles';
import DocumentFiles from './components/documentFiles';
import ImageFiles from './components/imageFiles';
import FamilyLegacy from './components/familyLegacy';
import FamilyAcces from './components/familyAcces';
import Subscription from './components/subscription';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/audio-files" element={<AudioFiles />} />
        <Route path="/video-files" element={<VideoFiles />} />
        <Route path="/document-files" element={<DocumentFiles />} />
        <Route path="/image-files" element={<ImageFiles />} />
        <Route path="/family-legacy" element={<FamilyLegacy />} />
        <Route path="/family-acces/:title" element={<FamilyAcces />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
}

export default App;