import React, { createContext, useContext } from 'react';
import { getMessages } from '../Common/services';

const AppContext = createContext();
export const AppIntlContext = createContext(null);

export const initialLangState = {
  locale: 'en',
  messages: getMessages('en')
};

export const langReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_LOCALE':
      return {
        ...state,
        locale: payload,
        messages: getMessages(payload)
      };
    default:
      return state;
  }
};

export const actions = {
  setLanguage: lang => ({
    type: 'SET_LOCALE',
    payload: lang
  })
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }

  return context;
};
