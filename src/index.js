import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

//components
import GuestLayout from './layouts/guestLayout';

const el = document.getElementById("root");
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    ReactDOM.render(<GuestLayout/>, el);
  }
  else{
    ReactDOM.render(<GuestLayout/>, el);
  }
});