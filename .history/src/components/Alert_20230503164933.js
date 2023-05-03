import React from "react";

function Alert({message}) {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        {message}
      </div>
    </div>
  );
}

export default Alert;
