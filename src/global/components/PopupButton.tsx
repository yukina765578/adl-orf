import React from 'react';
import { Button } from '@chakra-ui/react';

interface PopupButtonProps {
    id: number;
    viewportSize: {width: number; height: number};
    buttonPosition: {width: number; height: number};
    modalButtonContent: string;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
}

const PopupButton: React.FC<PopupButtonProps> = ({
    id,
    viewportSize,
    buttonPosition,
    modalButtonContent,
    setCurrentModal
}) => {
    const handleOnOpen = () => {
        setCurrentModal(id);
    }

    const topPercentage = (buttonPosition.height / 264.738) * 100;
    const leftPercentage = (buttonPosition.width / 264.738);
    const calculatedLeftCoordinate = (viewportSize.width / 2 + viewportSize.height * leftPercentage);

    // Clamp button position to stay inside viewport
    // Increased to account for pulsing circle (40px + expansion)
    const buttonHalfSize = 35;
    const minLeft = buttonHalfSize;
    const maxLeft = viewportSize.width - buttonHalfSize;
    const leftCoordinate = Math.max(minLeft, Math.min(maxLeft, calculatedLeftCoordinate));

    const buttonStyle = {
        display: 'flex',
        top: `${topPercentage}%`,
        left: leftCoordinate,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid',
            borderColor: 'gray.400',
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
    }

    return (
        <Button onClick={handleOnOpen} sx={buttonStyle} variant='unstyled'>
            {modalButtonContent}
        </Button>
    );
};

export default PopupButton;