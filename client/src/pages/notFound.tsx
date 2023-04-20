import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  return (
    <div id="not-found-page">
      <h1>Oops!</h1>
      <p>The page you're looking is not found.</p>
    </div>
  );
}
