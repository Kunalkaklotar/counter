import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);