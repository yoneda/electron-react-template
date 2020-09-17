import React from "react";
import ReactDOM from "react-dom";

function HelloMessage(props) {
  const { name } = props;
  return <div>hello, {name}</div>;
}

ReactDOM.render(<HelloMessage name="Jane" />, document.getElementById("app"));
