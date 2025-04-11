import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-text">❌ {message}</p>
    </div>
  );
};

export default ErrorMessage;
