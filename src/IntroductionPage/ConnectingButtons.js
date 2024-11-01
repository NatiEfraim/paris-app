import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`

const ConnectingButtons = () => {


  const navigate = useNavigate(); // Hook for navigation

  const pushToJoinRoomPage = () => {
    navigate("/join-room"); // Navigates to "/join-room"
  };

  const pushToJoinRoomPageAsHost = () => {
    navigate("/join-room?host=true");  // Navigates to "/join-room?host=true"
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
