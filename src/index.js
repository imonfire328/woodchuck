import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

const style = {
  background: "black",
  width: "100%"
};

const Nav = s => {
  return (
    <div style={style}>
      <nav>
        <ul>
          <li>one</li>
        </ul>
      </nav>
    </div>
  );
};



function register(){
  var email = document.getElementById("formEmailInput").value
  var password = document.getElementById("formPasswordInput").value;
  var confPassword = document.getElementById("confirmPasswordInput").value;
  var userType = document.getElementById("userTypeSelector").value;
  
  if(password != confPassword){
    window.alert("pass: " + password + ", confPass: " + confPassword);
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    window.alert(error.message);
  });

}

const App = () => {
  return (
    <div>
      <header>
        <nav class="bg-secondary navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand font-weight-bold" href="#">
            woodchuck
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse a" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-primary" href="#">
                  login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  about
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  terms
                </a>
              </li>
            </ul>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto" />
          </div>
        </nav>
      </header>
      <main>
        <div class="jumbotron bg-white">
          <div class="container">
            <div class="row">
              <div class="col-lg">
                <div class="card">
                  <div class="card-body p-5">
                    <h1 class="mb-4">Finding wood chips and logs a home.</h1>
                    <h6 class="card-subtitle mb-2 text-muted" />
                    <p class="card-text">
                      Woodchuck is a service connecting home owners who want
                      free wood and/or chips with arborists looking for
                      accessable drop sites.
                    </p>
                    <a href="#" class="card-link">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg bg-black">
                <div class="card bg-dark shadow-sm">
                  <div class="card-body p-5">
                    <h3 class="mb-4 text-light">Sign up</h3>
                    <form>
                      <div class="form-group">
                        <label className="text-light" for="formEmailInput">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="formEmailInput"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div class="form-group">
                        <label
                          className="text-light"
                          for="formPasswordInput"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="formPasswordInput"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group">
                        <label
                          className="text-light"
                          for="confirmPasswordInput"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="confirmPasswordInput"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div class="form-group">
                        <label
                          className="text-light"
                          for="userTypeSelector"
                        >
                          User Type
                        </label>
                        <select
                          class="form-control"
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
                        class="btn btn-primary" onClick={() => register()}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer />
    </div>
  );
};

const el = document.getElementById("root");
ReactDOM.render(<App />, el);
