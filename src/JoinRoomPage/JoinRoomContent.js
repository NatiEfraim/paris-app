import React, { useState } from 'react';
import JoinRoomInputs from './JoinRoomInputs';
import { connect } from "react-redux";
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import { setConnectOnlyWithAudio } from '../store/actions';
import ErrorMessage from './ErrorMessage';






const JoinRoomContent = (props) => {
      // Destructuring props to get the state values and update functions

    const {isRoomHost,setConnectOnlyWithAudio,connectOnlyWithAudio} = props;


  // State Hooks to manage input values
  const [roomIdValue, setRoomIdValue] = useState(''); // State to manage the room ID
  const [nameValue, setNameValue] = useState('');     // State to manage the user's name
  const [errorMessage, setErrorMessage] = useState(null);  // State to manage the err msg

  
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