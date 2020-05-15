import React, {useState} from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    username: null,
    token: null,
    isVerified: false,
  });

  const userLogin = (username, token) => {
    setUser({
      ...user,
      username,
      token,
    });
  };

  let value = {user, userLogin};

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
