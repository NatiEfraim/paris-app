import React, { useState } from 'react';
import JoinRoomInputs from './JoinRoomInputs';
import { connect } from "react-redux";






const JoinRoomContent = (props) => {
      // Destructuring props to get the state values and update functions

    const {isRoomHost} = props;


  // State Hooks to manage input values
  const [roomIdValue, setRoomIdValue] = useState(''); // State to manage the room ID
  const [nameValue, setNameValue] = useState('');     // State to manage the user's name

  
    return (
        <>
            <JoinRoomInputs
      roomIdValue={roomIdValue}          // Passing down the roomIdValue state
      setRoomIdValue={setRoomIdValue}    // Passing down the function to update roomIdValue
      nameValue={nameValue}              // Passing down the nameValue state
      setNameValue={setNameValue}        // Passing down the function to update nameValue
      isRoomHost={isRoomHost}            // Assuming `isRoomHost` will be passed as a prop


            />
        </>
    );


    
};
const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
  };

export default connect(mapStoreStateToProps)(JoinRoomContent) ;