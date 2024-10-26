import { Box } from "@chakra-ui/layout"

interface overlayProps {
    isOpen: boolean;
}

const Overlay: React.FC<overlayProps> = ({ isOpen }) => {
    const overlayStyle = {
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 10,
        opacity: isOpen ? 0.3 : 0,
        transition: 'opacity 0.2s ease-out',
        pointerEvents: 'none',
    }
    return(
        <Box sx={overlayStyle} />
    )
}

export default Overlay