import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { ChakraProvider, theme as chakraTheme, Box, extendTheme  } from '@chakra-ui/react';
import Loading from './page/loading';
import AppRoutes from './global/Routes';
import Navigation from './global/components/Navigation';
import Header from './global/components/Header';
import BackButton from './global/components/BackButton';

const customTheme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    body: 'Aril, sans-serif',
    heading: 'Aril, sans-serif',
  },
  Button: {
    sizes: {
      xs: {
        w: '4px',
        h: '4px',
      },
    },
  },
})

function App() {
  const [headerHeight, setHeaderheight] = useState<number>(0)

  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <Box>
          <Loading />
          <AppRoutes headerHeight={headerHeight}/>
          <Header setHeaderHeight={setHeaderheight}/>
          <BackButton headerHeight={headerHeight}/>
          <Navigation />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
