import React from "react";
import ReactDOM from "react-dom";

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
                        <label className="text-light" for="exampleInputEmail1">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
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
                          for="exampleInputPassword1"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group">
                        <label
                          className="text-light"
                          for="exampleInputPassword1"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div class="form-group">
                        <label
                          className="text-light"
                          for="exampleFormControlSelect1"
                        >
                          User Type
                        </label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option className="text-light">
                            Select User Type
                          </option>
                          <option>Arborist</option>
                          <option>Home Owner</option>
                        </select>
                      </div>
                      <button
                        class="g-recaptcha btn-sm btn-primary"
                        data-sitekey="6LdpuW0UAAAAAAXPWyNefuH20Mfn_xnFz_uyxiom"
                        data-callback="YourOnSubmitFn"
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
