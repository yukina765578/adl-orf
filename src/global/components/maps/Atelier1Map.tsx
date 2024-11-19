import { Box, Image } from '@chakra-ui/react';
import Map from 'image/atelier1.png';

const Atelier1Map = () => {
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
        opacity: 0.8
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

export default Atelier1Map;
