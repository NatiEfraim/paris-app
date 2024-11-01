import React, { useEffect } from 'react';
import logo from "../resources/images/logo.png";
import ConnectingButtons from './ConnectingButtons';
import { setIsRoomHost } from '../store/actions';
import { connect } from 'react-redux';
import "./IntroductionPage.css";

const IntroductionPage = ({ setIsRoomHostAction }) => {


  useEffect(() => {
    setIsRoomHostAction(false)
  });


  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image" alt="Company Logo"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};


export default connect(null, mapActionsToProps)(IntroductionPage);