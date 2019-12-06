import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        min-height: 100%;
      }
      body {
        min-width: 100%;
      }
      #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: relative;
      }
    `}
  />
);
