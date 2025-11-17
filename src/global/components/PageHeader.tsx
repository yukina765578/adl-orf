import React, { useState, useEffect } from "react";
import { Box, IconButton, Heading, Image } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavigationLeft } from "./NavigationLeft";
import ADLLogo from 'image/ADLLogo.png';
import ErikaLabLogo from 'image/ErikaLabLogo.png';

interface PageHeaderProps {
  headerHeight: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ headerHeight }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logo, setLogo] = useState<string>(ADLLogo);
  const [pageTitle, setPageTitle] = useState<string>("");

  useEffect(() => {
    // Set logo and title based on route
    if (location.pathname === '/adl-orf/atelier1') {
      setLogo(ErikaLabLogo);
      setPageTitle("Atelier 1");
    } else if (location.pathname === '/adl-orf/atelier2') {
      setLogo(ADLLogo);
      setPageTitle("Atelier 2");
    } else if (location.pathname === '/adl-orf/lounge') {
      setLogo(ADLLogo);
      setPageTitle("Lounge");
    } else {
      setLogo(ADLLogo);
      setPageTitle("");
    }
  }, [location.pathname]);

  const handleBackClick = () => {
    navigate('/adl-orf');
  };

  // Don't render on home page
  if (location.pathname === '/adl-orf' || location.pathname === '/adl-orf/') {
    return null;
  }

  return (
    <Box
      position="fixed"
      top={headerHeight}
      left={0}
      width="100%"
      backgroundColor="white"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10px 15px"
      zIndex={999}
    >
      {/* Left side: Back button + Title */}
      <Box display="flex" alignItems="center" gap={4}>
        <IconButton
          onClick={handleBackClick}
          variant="unstyled"
          aria-label="Back"
          icon={<NavigationLeft />}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="auto"
        />
        <Heading fontSize="xl" fontWeight="600">
          {pageTitle}
        </Heading>
      </Box>

      {/* Right side: Logo */}
      <Image
        src={logo}
        boxSize="40px"
        alt="Logo"
        objectFit="contain"
        filter="invert(1)"
      />
    </Box>
  );
};

export default PageHeader;