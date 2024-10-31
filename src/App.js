import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use `Routes` instead of `Switch`
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';
import IntroductionPage from './IntroductionPage/IntroductionPage';
import './App.css';

function App() {

  return (
    <Router>
      <Routes> {/* Use `Routes` instead of `Switch` */}
        <Route path="/join-room" element={<JoinRoomPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/" element={<IntroductionPage />} />
      </Routes>
    </Router>
  );

}

export default App;
