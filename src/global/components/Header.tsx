import { Box, Divider, Image } from '@chakra-ui/react';
import Title from 'image/Title.png';
import { SetStateAction, useEffect, useRef } from 'react';

interface HeaderProps {
  setHeaderHeight: React.Dispatch<SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ setHeaderHeight }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Update the header height initially and on window resize
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [setHeaderHeight]);

  const handleOnLoad = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  };

  return (
    <Box sx={{
      position: 'fixed',
      padding: 2,
      top: 0,
      left: 0,
      backgroundColor: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 1000,
    }} ref={headerRef}>
      <Image src={Title} marginBottom={3} maxH={20} onLoad={handleOnLoad} />
      <Divider />
    </Box>
  );
};

export default Header;
