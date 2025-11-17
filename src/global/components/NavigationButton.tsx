import { Button, Image, Box } from '@chakra-ui/react'
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
        borderRadius: '50%'
    }

    const pulsingRingStyle = {
        position: 'absolute' as const,
        top: coordinate.top,
        left: coordinate.left,
        transform: 'translate(-50%, -50%)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '2px solid',
            borderColor: 'gray.300',
            animation: 'pulse-ring 2s ease-out infinite',
            pointerEvents: 'none'
        },
        '@keyframes pulse-ring': {
            '0%': {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 0.8
            },
            '100%': {
                transform: 'translate(-50%, -50%) scale(1.5)',
                opacity: 0
            }
        }
    };

    return(
        <Box sx={pulsingRingStyle}>
            <Button
              style={buttonStyle}
              onClick={handleOnClick}
              backgroundColor="transparent"
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
        </Box>
    )
}

export default NavigationButton
