import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';
import IntroductionPage from './IntroductionPage/IntroductionPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/join-room'>
          <JoinRoomPage/>
        </Route>
        <Route path="/room">
          <RoomPage/>
        </Route>
        <Route path="/">
          <IntroductionPage/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
