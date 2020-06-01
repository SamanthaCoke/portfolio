import React from "react";
import { Link as RouteLink } from "react-router-dom";

function Aboutme() {
  return (
    <div>
      <h1>About me</h1>
      <h3>
        <RouteLink to="/">Home</RouteLink>
      </h3>
    </div>
  );
}

export default Aboutme;
