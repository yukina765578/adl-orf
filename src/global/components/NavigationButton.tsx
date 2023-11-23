import { Box, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface NavigationButtonProps {
    imagePosition: {top: number, left: number},
    imageSize: {width: number, height: number};
    buttonPosition: {width: number, height: number};
    headerHeight: number;
    handleOnClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({imagePosition, imageSize, buttonPosition, headerHeight, handleOnClick}) => {
    const [coordinate, setCoordinate] = useState({
        top: 0,
        left: 0
    })
    useEffect(() => {
        const scalingScalar = () => {
            const imageActualWidth: number =  587.43
            const imageActualHeight: number = 323.87 
            const heightScaling = imageSize.height / imageActualHeight
            const widthScaling = imageSize.width / imageActualWidth
            if (heightScaling < widthScaling){
                return(heightScaling)
            }
            else{
                return(widthScaling)
            }
        }
        const scaling = scalingScalar()
        const buttonTop = buttonPosition.height * scaling;
        const imageScaledHeight = 323.87 * scaling
        const imageTopPosition = (imageSize.height - imageScaledHeight) / 2
        const topCoordinate = imagePosition.top - headerHeight + imageTopPosition + buttonTop;
    
        const buttonLeft = buttonPosition.width * scaling;
        const imageScaledWidth = 587.43 * scaling
        const imageLeftPosition = (imageSize.width - imageScaledWidth) / 2
        const leftCoordinate = imageLeftPosition + buttonLeft;
        setCoordinate({top:topCoordinate, left:leftCoordinate})
    }, [imagePosition, imageSize, buttonPosition, headerHeight])
    const buttonStyle = {
        display: 'flex',
        top: coordinate.top,
        left: coordinate.left,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%'
    }
    return(
        <Button style={buttonStyle} onClick={handleOnClick} backgroundColor="transparent" position="absolute">
            <Box position="absolute" width={4} height={4} backgroundColor="black" />
            <Box
                position="absolute"
                width={8}
                height={8}
                borderWidth={2}
                borderColor="black"
                backgroundColor="transparent"
            />
        </Button>
    )
}

export default NavigationButton