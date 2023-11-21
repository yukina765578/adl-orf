import { Fade } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface OpenFadeProps {
  children: ReactNode;
  shouldFade: boolean;
}

const OpenFade: React.FC<OpenFadeProps> = ({ children, shouldFade }) => {
  return shouldFade ? <>{children}</> : <Fade in={true} transition={{enter: {duration: 0.3}, exit: {duration: 0.3}}}>{children}</Fade>;
};

export default OpenFade;