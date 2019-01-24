import React from 'react';


export default React.createContext({
  tken: null,
  userId: null,
  login: (token, userId, tokenExpiration) => { },
  logout: () => { }
})