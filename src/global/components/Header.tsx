import { Box, Divider, Image } from '@chakra-ui/react';
import Title from '../../image/Title.png'

const Header = () => {
    const headerStyle = {
        position: 'absolute',
        padding: 2,
        top: 0,
        left: 0,
        backgroundColor: 'white'
    }
    return(
        <Box sx={headerStyle}>
            <Image src={Title} marginBottom={3}/>
            <Divider />
        </Box>
    )
}

export default Header