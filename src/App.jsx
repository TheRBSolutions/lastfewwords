import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
        <Route path="/lastfewwords/" element={<Navigate to="/lastfewwords/login" />} />
        <Route path="/lastfewwords/login" element={<Login />} />
        <Route path="/lastfewwords/otp-verification" element={<OtpVerification />} />
        <Route path="/lastfewwords/signup" element={<SignUp />} />
        <Route path="/lastfewwords/dashboard" element={<Dashboard />} />
        <Route path="/lastfewwords/audio-files" element={<AudioFiles />} />
        <Route path="/lastfewwords/video-files" element={<VideoFiles />} />
        <Route path="/lastfewwords/document-files" element={<DocumentFiles />} />
        <Route path="/lastfewwords/image-files" element={<ImageFiles />} />
        <Route path="/lastfewwords/family-legacy" element={<FamilyLegacy />} />
        <Route path="/lastfewwords/family-acces/:title" element={<FamilyAcces />} />
        <Route path="/lastfewwords/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
}

export default App;
