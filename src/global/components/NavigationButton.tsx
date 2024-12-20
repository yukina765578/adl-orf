import { Button, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface NavigationButtonProps {
    imagePosition: {top: number, left: number},
    imageSize: {width: number, height: number};
    buttonPosition: {width: number, height: number};
    headerHeight: number;
    handleOnClick: () => void;
    logo: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({imagePosition, imageSize, buttonPosition, headerHeight, handleOnClick, logo}) => {
    const [coordinate, setCoordinate] = useState({
        top: 0,
        left: 0
    })
    useEffect(() => {
        const imageActualWidth: number = 350
        const imageActualHeight: number = 550
        const scalingScalar = () => {
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
        const imageScaledHeight = imageActualHeight * scaling
        const imageTopPosition = (imageSize.height - imageScaledHeight) / 2
        const topCoordinate = imagePosition.top - headerHeight + imageTopPosition + buttonTop;

        const buttonLeft = buttonPosition.width * scaling;
        const imageScaledWidth = imageActualWidth * scaling
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
        <Button
          style={buttonStyle}
          onClick={handleOnClick}
          backgroundColor="transparent"
          position="absolute"
          variant="unstyled"
        >
          <Image
            src={logo}
            style={{
              backgroundColor: 'None',
              filter: 'invert(1)',
            }}
            alt="Navigation Button"
            boxSize="48px"
            objectFit="contain"
          />
        </Button>
    )
}

export default NavigationButton
