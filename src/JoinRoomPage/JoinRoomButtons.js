import React from 'react';
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`


// First Functional Component: Button

const Button = ({ buttonText, cancelButton = false, onClickHandler }) => {
    const buttonClass = cancelButton
      ? "join_room_cancel_button"
      : "join_room_success_button";
  
    return (
      <button onClick={onClickHandler} className={buttonClass}>
        {buttonText}
      </button>
    );
  };

// Second Functional Component: JoinRoomButtons


const JoinRoomButtons = ({handleJoinRoom, isRoomHost}) => {

    const successButtonText = isRoomHost ? "Host" : "Join";
    const navigate = useNavigate(); // Hook for navigation

    const pushToIntroductionPage = () => {
        navigate("/"); // Navigates to "/index"

      };

    return (
        <div className="join_room_buttons_container">
        <Button buttonText={successButtonText} onClickHandler={handleJoinRoom} />
        <Button
          buttonText="Cancel"
          cancelButton
          onClickHandler={pushToIntroductionPage}
        />
      </div>
    );
};

export default JoinRoomButtons;