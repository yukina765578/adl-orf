import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChakraProvider,
  theme as chakraTheme,
  Box,
  extendTheme,
} from "@chakra-ui/react";
import Loading from "./page/loading";
import AppRoutes from "./global/Routes";
import Navigation from "./global/components/Navigation";
import Header from "./global/components/Header";
import PageHeader from "./global/components/PageHeader";
import { PopupContent } from "./notion/types";

const customTheme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    body: "Aril, sans-serif",
    heading: "Aril, sans-serif",
  },
  Button: {
    sizes: {
      xs: {
        w: "4px",
        h: "4px",
      },
    },
  },
});

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, []);

  return null;
}

function App() {
  const [headerHeight, setHeaderheight] = useState<number>(0);
  const [data, setData] = useState<PopupContent[]>([]);

  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <Box>
          <ScrollToTop />
          <Loading setData={setData} />
          <Header setHeaderHeight={setHeaderheight} />
          <PageHeader headerHeight={headerHeight} />
          <AppRoutes headerHeight={headerHeight} data={data} />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
