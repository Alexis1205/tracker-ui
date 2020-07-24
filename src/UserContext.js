// A React Context for Storing User State

import React from 'react';

const UserContext = React.createContext({
  signedIn: false,
});

export default UserContext;
