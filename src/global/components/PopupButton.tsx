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
    const buttonHalfSize = 24;
    const minLeft = buttonHalfSize;
    const maxLeft = viewportSize.width - buttonHalfSize;
    const leftCoordinate = Math.max(minLeft, Math.min(maxLeft, calculatedLeftCoordinate));

    const buttonStyle = {
        display: 'flex',
        top: `${topPercentage}%`,
        left: leftCoordinate,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent'
    }

    return (
        <Button onClick={handleOnOpen} sx={buttonStyle} variant='unstyled'>
            {modalButtonContent}
        </Button>
    );
};

export default PopupButton;