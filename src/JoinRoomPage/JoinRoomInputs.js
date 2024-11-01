import React from 'react';



// First Functional Component: Input

const Input = ({ placeholder, value, changeHandler }) => {
    return (
      <input
        value={value}
        onChange={changeHandler}
        className="join_room_input"
        placeholder={placeholder}
      />
    );
  };


// Second Functional Component: JoinRoomInputs

const JoinRoomInputs = (props) => {
      // Destructuring props to get the state values and update functions

    const { roomIdValue, setRoomIdValue, nameValue, setNameValue, isRoomHost } =
    props;


      // Function to handle changes in the room ID input field

    const handleRoomIdValueChange = (event) => {
        setRoomIdValue(event.target.value);
      };
    

        // Function to handle changes in the name input field

      const handleNameValueChange = (event) => {
        setNameValue(event.target.value);
      };
    



    return (
        <div className='join_room_inputs_container'>
        
        {/* Using the Input component for the Room ID input */}

    {  !isRoomHost &&  (< Input
          placeholder="Enter meeting ID"
          value={roomIdValue}
          changeHandler={handleRoomIdValueChange}
        />)  } 

              {/* Using the Input component for the Name input */}     
              <Input
        placeholder="Enter your Name"
        value={nameValue}
        changeHandler={handleNameValueChange}
      />
        </div>
    );
};

export default JoinRoomInputs;