import React from "react";
import { useAuth } from "../context/auth";

function Logout(props) {
  const { setAuthTokens } = useAuth();
  return (
    <div>
      {setAuthTokens()}
      {window.location.reload(false)}
    </div>
  );
}

export default Logout;
