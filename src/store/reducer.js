
import Actions from "./actions";


const initState = {
  identity: '',      // Initial state property
  isRoomHost: false, // Initial state property
  connectOnlyWithAudio: false, // Initial state property
  roomId: false, // Initial state property
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,                  // Spread operator to copy the current state
        isRoomHost: action.isRoomHost, // Update the `isRoomHost` property
      };
      case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
        return {
          ...state,
          connectOnlyWithAudio: action.onlyWithAudio,
        };
        case Actions.SET_ROOM_ID:
          return {
            ...state,
            roomId:action.roomId,
          };
          case Actions.SET_IDENTITY:
            return {
              ...state,
              identity:action.identity
            };

    default:
      return state; // Return the unchanged state if action type does not match

  }

}

export default reducer;