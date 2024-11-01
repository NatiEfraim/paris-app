import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRoomHost } from '../store/action';

const JoinRoomPage = (props) => {
    const {setIsRoomAction } = props;
      const location = useLocation();

      useEffect(()=>{
           // Extract the query parameter "host" from the URL
            const searchParams = new URLSearchParams(location.search);
            const isRoomHost = searchParams.get("host");
    
            if (isRoomHost) {
                // Perform an action, like setting a state or triggering a function
                setIsRoomAction(true);
            console.log("User is a room host");
            // Example: setIsRoomHostAction(true);
    }
      });

    return (
        <div>
            Hello from JoinRoomPage!!
        </div>
    );
};

const mapStoreStateToProps =(state)=>{
return {
    ...state
};
};

const mapActionsToProps=(dispatch)=>{
    return {
        setIsRoomAction: (isRoomHost)=> {return  dispatch(setIsRoomHost(isRoomHost));} 
    };
};


export default connect(mapStoreStateToProps,mapActionsToProps) (JoinRoomPage);