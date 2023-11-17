import React from 'react';
import { Box } from '@chakra-ui/react'
import NaviLink from './NaviLink';

const Navigation = () => {
    const boxStyle = {
        position: 'fixed',
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: '30px',
        marginBottom: '40px',
        lineHeight: 1.5,
        fontSize: '16px'
    }

    return(
        <Box sx={boxStyle}>
            <NaviLink to='/atelier2' _activeLink={{textDecoration: 'underline'}}>Atelier2</NaviLink>
            <NaviLink to='/atelier1' _activeLink={{textDecoration: 'underline'}}>Atelier1</NaviLink>
            <NaviLink to='/lounge' _activeLink={{textDecoration: 'underline'}}>Lounge</NaviLink>
        </Box>
    )
}

export default Navigation