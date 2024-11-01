const Actions={
    SET_IS_ROOM_HOST:"SET_IS_ROOM_HOST",// Action type
    SET_CONNECT_ONLY_WITH_AUDIO: "SET_CONNECT_ONLY_WITH_AUDIO",
    SET_IDENTITY: "SET_IDENTITY",

    SET_ROOM_ID: "SET_ROOM_ID",

};

export const setIsRoomHost = (isRoomHost)=>{
return {
    type:Actions.SET_IS_ROOM_HOST,// Action type
    isRoomHost:isRoomHost,// Payload (data)
};
};

export const setConnectOnlyWithAudio = (onlyWithAudio) => {
    return {
      type: Actions.SET_CONNECT_ONLY_WITH_AUDIO,// Action type
      onlyWithAudio,// Payload (data)
    };
  };

  export const setIdentity = (identity) => {
    return {
      type: Actions.SET_IDENTITY,// Action type
      identity,// Payload (data)
    };
  };
  
  export const setRoomId = (roomId) => {
    return {
      type: Actions.SET_ROOM_ID,// Action type
      roomId,// Action type
    };
  };




export default Actions;