import { Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import adlLogo from 'image/logo.png'

interface logoHeaderProps {
    headerHeight: number
}

const LogoHeader: React.FC<logoHeaderProps> = ({headerHeight}) => {
  const location  = useLocation();

  if (location.pathname === '/adl-orf' || location.pathname === '/adl-orf/') {
    return null; // Don't render the BackButton when in the home route ('/')
  }

  const logo = adlLogo

  return (
      <Image
        src={logo}
        style={{
          backgroundColor: 'black',
          display: 'flex',
          border: '1px solid gray',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: "0px",
          top: headerHeight,
          marginRight: '10px',
        }}
        alt="Navigation Button"
        boxSize="40px"
        objectFit="cover"
      />
  );
}

export default LogoHeader
