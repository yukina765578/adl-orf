import { useState, useEffect } from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
import Map from '../../../image/Lounge/map.png';

const LoungeMap = () => {
    const [imageSize, setImageSize] = useState({ width: 0, height: 0});
    const mapBox = {
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
        transform: 'scale(2.4)',
        opacity: 0.4
    }
    

    
    return (
        <Box sx={mapBox}>
            <Image
                src={Map}
                style={imageStyle}
                objectFit={'cover'}
            />
        </Box>
    );
};

export default LoungeMap;
