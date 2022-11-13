import { Button } from 'react-bootstrap';
import store from './../../store';


const LogoutButton = () => {

  const handleLogout = () => {
    store.dispatch({ type: 'logout' });
  }

  return (
    <Button onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;