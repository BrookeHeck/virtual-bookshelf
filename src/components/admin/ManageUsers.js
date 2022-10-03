import React from 'react';

export default function ManageUser() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/users`,
          data: {role: localStorage.getItem('role')}
        }
        const res = await axios(config);
        setUsers(res.data);
      } catch(e) {
        console.log(e);
      }
    }
    if(localStorage.getItem('token')) getUsers();
    else setUsers([]);
    console.log(users);
  }, [setUsers, users]);

  return (
    
  )
}