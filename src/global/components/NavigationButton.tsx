import { Button } from '@chakra-ui/react'

interface NavigationButton {
    viewportSize: {width: number, height: number};
    buttonPosition: {width: number, height: number};
    content: string;
}

const NavigationButton: React.FC<NavigationButton> = ({viewportSize, buttonPosition, content}) => {
    const topPercentage = (buttonPosition.height / 852.06) * 100;
    const leftPercentage = (buttonPosition.width / 852.06);
    const leftCoordinate = (viewportSize.width / 2 + viewportSize.height * leftPercentage);
    const buttonStyle = {
        display: 'flex',
        top: `${topPercentage}%`,
        left: leftCoordinate,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent'
    }
    return(
        <Button sx={buttonStyle}> {content} </Button>
    )
}

export default NavigationButton