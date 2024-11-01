
import Actions from "./actions";


const initState = {
  identity: '',      // Initial state property
  isRoomHost: false, // Initial state property
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,                  // Spread operator to copy the current state
        isRoomHost: action.isRoomHost, // Update the `isRoomHost` property
      };
    default:
      return state; // Return the unchanged state if action type does not match

  }

}

export default reducer;