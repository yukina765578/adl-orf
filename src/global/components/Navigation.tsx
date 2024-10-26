import React from 'react';
import { Box } from '@chakra-ui/react'
import NaviLink from './NaviLink';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    const boxStyle = {
        position: 'fixed',
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        lineHeight: 1.5,
        fontSize: '16px',
        backgroundColor: 'rgba(256,256,256,0.9)',
        paddingRight: 10,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 15,
    }
    if (location.pathname !== '/'){
        return(
            <Box sx={boxStyle}>
                <NaviLink to='/lounge' _activeLink={{textDecoration: 'underline'}}>1階　ラウンジ</NaviLink>
                <NaviLink to='/atelier1' _activeLink={{textDecoration: 'underline'}}>1階　アトリエ</NaviLink>
                <NaviLink to='/atelier2' _activeLink={{textDecoration: 'underline'}}>2階　アトリエ</NaviLink>
            </Box>
        )
    } else {
        return (<></>)
    }
    
}

export default Navigation