import React from 'react';
import firebase from 'firebase-tools';

const Registration = () => {
    return(
        <div className="col-lg bg-black">
                <div className="card bg-dark shadow-sm">
                  <div className="card-body p-5">
                    <h3 className="mb-4 text-light">Sign up</h3>
                    <form>
                      <div className="form-group">
                        <label className="text-light" htmlFor="formEmailInput">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="formEmailInput"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                        </small>
                      </div>
                      <div className="form-group">
                        <label
                          className="text-light"
                          htmlFor="formPasswordInput"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="formPasswordInput"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="text-light"
                          htmlFor="confirmPasswordInput"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPasswordInput"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="text-light"
                          htmlFor="userTypeSelector"
                        >
                          User Type
                        </label>
                        <select
                          className="form-control"
                          id="userTypeSelector"
                        >
                          <option className="text-light">
                            Select User Type
                          </option>
                          <option>Arborist</option>
                          <option>Home Owner</option>
                        </select>
                      </div>
                      <button
                        className="btn btn-primary" onClick={() => register()}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
    )
}

function register(){
    var email = document.getElementById("formEmailInput").value
    var password = document.getElementById("formPasswordInput").value;
    var confPassword = document.getElementById("confirmPasswordInput").value;
    var userType = document.getElementById("userTypeSelector").value;
    
    if(password != confPassword){
      window.alert("pass: " + password + ", confPass: " + confPassword);
    }
  
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("registration success")
      window.location="http://www.woodchuck.app/confirmRegistration"
  
    }).catch(function(error){
      window.alert(error.message);
    });
  
  }

export default Registration