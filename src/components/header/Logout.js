import { Button } from 'react-bootstrap';
import React from "react";

const LogoutButton = () => {

  return (
    <Button onClick={() => { localStorage.clear(); }}>
      Log Out
    </Button>
  );
};

export default LogoutButton;