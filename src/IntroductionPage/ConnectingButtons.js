import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`

const ConnectingButtons = () => {

  
  const navigate = useNavigate(); // Initialize `useNavigate`

  const pushToJoinRoomPage = () => {
    navigate("/join-room"); // Use `navigate` instead of `history.push`
  };

  const pushToJoinRoomPageAsHost = () => {
    navigate("/join-room?host=true"); // Use `navigate` for navigation
  };

  return (

    <div className="connecting_buttons_container">
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
      />
      <ConnectingButton
        createRoomButton
        buttonText="Host a meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
      />
    </div>
  );
};

export default ConnectingButtons;
