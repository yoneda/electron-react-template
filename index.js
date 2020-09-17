import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import request from "superagent";

function Home(props) {
  return <div>This is home page</div>;
}

function About(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    const url = "https://reqres.in/api/users/1";
    request
      .get(url)
      .then((res) => res.body)
      .then((body) => {
        setName(body.data.last_name);
      });
  }, []);
  return (
    <div>
      <div>This is about page</div>
      {name && <div>{name}</div>}
    </div>
  );
}

function Works(props) {
  return (
    <div>
      <div>This is works page</div>
      <p>Please check my awesome works.</p>
    </div>
  );
}

function Contact(props) {
  return (
    <div>
      <div>This is contact page</div>
      <p>Mail to me.</p>
    </div>
  );
}

function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="about">about</Link> |{" "}
      <Link to="works">works</Link> | <Link to="contact">contant</Link>
    </nav>
  );
}

function App(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    const url = "https://reqres.in/api/users/1";
    request
      .get(url)
      .then((res) => res.body)
      .then((body) => {
        setName(body.data.first_name);
      });
  }, []);
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Works path="/works" />
        <Contact path="/contact" />
      </Router>
      {name && <div>name is {name}</div>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
