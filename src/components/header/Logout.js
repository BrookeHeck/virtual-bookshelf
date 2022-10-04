import { Button } from 'react-bootstrap';
import React from "react";

const LogoutButton = ({ setIsAuthenticated }) => {

  return (
    <Button onClick={() => { localStorage.clear(); setIsAuthenticated(false); }}>
      Log Out
    </Button>
  );
};

export default LogoutButton;