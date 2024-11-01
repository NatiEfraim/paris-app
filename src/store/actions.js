const Actions={
    SET_IS_ROOM_HOST:"SET_IS_ROOM_HOST",// Action type
};

export const setIsRoomHost = (isRoomHost)=>{
return {
    type:Actions.SET_IS_ROOM_HOST,// Action type
    isRoomHost:isRoomHost,// Payload (data)
};
};

export default Actions;