import React, { useState } from 'react';
import JoinRoomInputs from './JoinRoomInputs';
import { connect } from "react-redux";
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import { setConnectOnlyWithAudio } from '../store/actions';
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';
import { getRoomExists } from '../utils/api';

import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`





const JoinRoomContent = (props) => {
      // Destructuring props to get the state values and update functions
     const {isRoomHost,setConnectOnlyWithAudio,connectOnlyWithAudio} = props;

   // State Hooks to manage input values
    const [roomIdValue, setRoomIdValue] = useState(''); // State to manage the room ID
    const [nameValue, setNameValue] = useState('');     // State to manage the user's name
    const [errorMessage, setErrorMessage] = useState(null);  // State to manage the err msg
    
    const navigate = useNavigate(); // Hook for navigation

  const handleJoinRoom = async ()=>{
console.log("goinnig");
if (isRoomHost) {
    //open a new meeting
    createRoom();//excute the function
}else{
    //join exist meeting
    await joinRoom();//excute the function
}

  }

  const joinRoom = async () => {
    const responseMessage = await getRoomExists(roomIdValue);

    const { roomExists, full } = responseMessage;

    if (roomExists) {
      if (full) {
        setErrorMessage("Meeting is full. Please try again later.");
      } else {
        // join a room !
        //!Need to save in the redux store the meeting id and the provided by user that want to join
        navigate("/room"); // Navigates to "/room"
    }
    } else {
      setErrorMessage("Meeting not found. Check your meeting id.");
    }
  };


//User is the host - open new meeting
  const createRoom = () => {
    navigate("/room"); // Navigates to "/room"

  };
  
    return (
        <>
            <JoinRoomInputs
      roomIdValue={roomIdValue}          // Passing down the roomIdValue state
      setRoomIdValue={setRoomIdValue}    // Passing down the function to update roomIdValue
      nameValue={nameValue}              // Passing down the nameValue state
      setNameValue={setNameValue}        // Passing down the function to update nameValue
      isRoomHost={isRoomHost}            // Assuming `isRoomHost` will be passed as a prop


            />
            <OnlyWithAudioCheckbox 
            setConnectOnlyWithAudio={setConnectOnlyWithAudio}
            connectOnlyWithAudio={connectOnlyWithAudio}
            />
            <ErrorMessage errorMessage={errorMessage}/>
            <JoinRoomButtons
            handleJoinRoom={handleJoinRoom}
            isRoomHost={isRoomHost}
            />
        </>
    );


    
};
const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
  };

  const mapActionsToProps = (dispatch) => {
    return {
      setConnectOnlyWithAudio: (onlyWithAudio) =>
        dispatch(setConnectOnlyWithAudio(onlyWithAudio)),

    };
  };



export default connect(mapStoreStateToProps,mapActionsToProps)(JoinRoomContent) ;