import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null; // Don't render if there's no message

  return (
    <div
      className="error-message"
      style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
