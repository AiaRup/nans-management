import React, { createContext } from 'react';
import { Location } from '@reach/router';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  return (
    <Location>
      {({ location }) => {
        return (
          <LocationContext.Provider value={{ location }}>
            {children}
          </LocationContext.Provider>
        );
      }}
    </Location>
  );
};
