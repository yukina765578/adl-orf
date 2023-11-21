import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, theme as chakraTheme, Box, extendTheme  } from '@chakra-ui/react';
import Loading from './page/loading';
import AppRoutes from './global/Routes';
import Navigation from './global/components/Navigation';
import Header from './global/components/Header';

const customTheme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    body: 'Noto Serif JP, serif',
    heading: 'Noto Serif JP, serif',
  },
});

function App() {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <Box>
          <Loading />
          <AppRoutes />
          <Header />
          <Navigation />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;