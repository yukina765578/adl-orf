import { Box, Divider, Image } from '@chakra-ui/react';
import Title from '../../image/Title.png'

const Header = () => {
    const headerStyle = {
        position: 'absolute',
        padding: 2,
        top: 0,
        left: 0,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
    return(
        <Box sx={headerStyle}>
            <Image src={Title} marginBottom={3} maxH={10}/>
            <Divider />
        </Box>
    )
}

export default Header