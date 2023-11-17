import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, Heading } from '@chakra-ui/react';
import Loading from './page/loading';
import AppRoutes from './global/Routes';
import Navigation from './global/components/Navigation';
import { Box, extendTheme, Fade } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    body: 'Crimson Pro, serif',
    heading: 'Crimson Pro, serif',
  },
});

function App() {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <Box>
          <Loading />
          <Navigation />
          <AppRoutes />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;