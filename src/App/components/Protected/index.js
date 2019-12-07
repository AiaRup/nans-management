import React, { useContext } from 'react';
import { Redirect } from '@reach/router';

import { AuthContext } from '../../../Common/contexts';

export const protectedComponent = Component => props => {
  const { authToken, isAuthenticated } = useContext(AuthContext);

  if (!authToken && !isAuthenticated)
    return <Redirect from="" to="login" noThrow />;
  return <Component {...props} />;
};
