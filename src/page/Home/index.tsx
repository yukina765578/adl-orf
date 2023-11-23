import React, { useEffect, useState } from'react';
import {Box, Image, Button } from '@chakra-ui/react'
import HomeIMG from '../../image/homepage.png'
import NavigationButton from '../../global/components/NavigationButton';

const Home = () => {
    const [viewportSize, setViewportSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    })
    const homeBox = {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const imageStyle = {
        width: 'auto',
        height: '100%',
        transform: 'scale(1)',
        opacity: 0.4,
        paddingBottom: 4
    }
    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return()=>{
            window.removeEventListener('resize', handleResize)
        }
    })
    return(
        <Box sx={homeBox}>
            <Image
                src={HomeIMG}
                style={imageStyle}
                objectFit={'cover'}
            />
            <NavigationButton viewportSize={viewportSize} buttonPosition={{width: 25.428, height: 714.063 }} content={'Lounge'}/>
        </Box>
    )
}

export default Home