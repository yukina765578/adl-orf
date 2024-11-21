import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ADLLogo from 'image/ADLLogo.png'
import ErikaLabLogo from 'image/ErikaLabLogo.png'

interface logoHeaderProps {
    headerHeight: number
}

const LogoHeader: React.FC<logoHeaderProps> = ({headerHeight}) => {
  const [logo, setLogo] = useState<string>(ADLLogo);
  const location  = useLocation();

  useEffect(() => {
    if (location.pathname === '/adl-orf/atelier1') {
      setLogo(ErikaLabLogo);
    } else {
      setLogo(ADLLogo);
    }
  }, [location.pathname]);

  if (location.pathname === '/adl-orf' || location.pathname === '/adl-orf/') {
    return null; // Don't render the BackButton when in the home route ('/')
  }
  


  return (
      <Image
        src={logo}
        style={{
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: "0px",
          top: headerHeight,
          marginRight: '10px',
          filter: 'invert(1)',
        }}
        boxSize="40px"
        alt="Navigation Button"
        objectFit="contain"
      />
  );
}

export default LogoHeader
