import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRoomHost } from '../store/actions';
import JoinRoomTitle from './JoinRoomTitle';
import JoinRoomContent from './JoinRoomContent';

import "./JoinRoomPage.css";

const JoinRoomPage = (props) => {
    const { setIsRoomAction, isRoomHost } = props;
    const location = useLocation();

    useEffect(() => {
        // Extract the query parameter "host" from the URL
        const searchParams = new URLSearchParams(location.search);
        const isRoomHost = searchParams.get("host");

        if (isRoomHost) {
            // Perform an action, like setting a state or triggering a function
            setIsRoomAction(true);// Update Redux state
            console.log("User is a room host");
            // Example: setIsRoomHostAction(true);
        }
    });// Dependency array to re-run when these change

    return (
        <div className="join_room_page_container">
            <div className="join_room_page_panel">
                <JoinRoomTitle isRoomHost={isRoomHost} />
                <JoinRoomContent />

            </div>
        </div>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,// Map Redux state to props
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        setIsRoomAction: (isRoomHost) => { return dispatch(setIsRoomHost(isRoomHost)); }  // Map action to props
    };
};


export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);