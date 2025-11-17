import React from 'react';
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    IconButton,
    Box,
    Image,
    Heading,
    Text,
    Divider,
    Link
} from '@chakra-ui/react';
import { NavigationRight } from './NavigationRight';
import { NavigationLeft } from './NavigationLeft';

interface PopupProps {
    id: number;
    viewportSize: {width: number; height: number};
    buttonPosition: {width: number; height: number};
    isOpen: boolean;
    modalImage: string;
    modalTitle: string;
    name: string;
    modalContent: string;
    contentUrl?: string; 
    modalButtonContent: string;
    onNextModal: () => void;
    onPrevModal: () => void;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
}

const Popup: React.FC<PopupProps> = ({ 
    id, 
    viewportSize, 
    buttonPosition, 
    isOpen, 
    modalImage, 
    modalTitle, 
    name, 
    modalContent, 
    contentUrl, 
    modalButtonContent, 
    onNextModal, 
    onPrevModal, 
    setCurrentModal 
}) => {
    const handleNextModal = () => {
        onNextModal();
    }
    const handlePrevModal = () => {
        onPrevModal()
    }
    const handleOnOpen = () => {
        setCurrentModal(id)
    }
    const handleOnClose = () => {
        setCurrentModal(0);
    }
    const topPercentage = (buttonPosition.height / 264.738) * 100;
    const leftPercentage = (buttonPosition.width / 264.738);
    const calculatedLeftCoordinate = (viewportSize.width / 2 + viewportSize.height * leftPercentage);

    // Clamp button position to stay inside viewport
    // Account for button size (48px) with transform: translate(-50%, -50%)
    const buttonHalfSize = 24; // Half of 48px button size
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
    
    const imageBox = {
        width: '100%',
        height: '25vh',
        minHeight: 200,
        maxHeight: 233,
        marginBottom: 10
    }
    
    const titleStyle = {
        fontSize: 28,
        marginTop: 10,
        marginBottom: 5
    }
    
    const nameStyle = {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
        letterSpacing: 0.8
    }
    
    const textStyle = {
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 0.8
    } as const

    const linkTitleStyle = {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0.8,
        marginTop: 16,
        marginBottom: 4
    }

    // eslint error never used
    //const linkStyle = {
    //    fontSize: '12px',
    //    color: 'blue.500',
    //    textDecoration: 'underline',
    //    sx: {
    //        wordBreak: 'break-all'
    //    }
    //} as const;

    return(
        <>
            <Button onClick={handleOnOpen} sx={buttonStyle} variant='unstyled'>{modalButtonContent}</Button>
            <Drawer isOpen={isOpen} onClose={handleOnClose} placement="bottom" size="full">
                <DrawerOverlay />
                <DrawerContent height="100vh" padding='40px' position="relative">
                    <DrawerCloseButton />
                    <DrawerBody overflowY='auto' maxWidth="600px" margin="0 auto" width="100%">
                        <Box style={imageBox}>
                            <Image
                                style={{width: '100%', height: '100%', borderRadius: '5px', objectFit: 'contain'}}
                                src={modalImage}
                            />
                        </Box>
                        <Divider marginTop={3} marginBottom={3}/>
                        <Box>
                            <Heading style={titleStyle} fontWeight={600}>{modalTitle}</Heading>
                            <Text style={nameStyle} fontWeight={600}>{name}</Text>
                            <Text style={textStyle}
                              sx={{ whiteSpace: 'pre-wrap' }}
                            >
                                {modalContent}
                            </Text>
                            {contentUrl && (
                                <>
                                    <Text style={linkTitleStyle}>展示内容リンク:</Text>
                                    <Link
                                        href={contentUrl}
                                        isExternal
                                        color="blue.500"
                                        fontSize="12px"
                                        textDecoration="underline"
                                        sx={{ wordBreak: 'break-all' }}
                                    >
                                        {contentUrl}
                                    </Link>
                                </>
                            )}
                        </Box>
                    </DrawerBody>
                    <IconButton
                        onClick={handlePrevModal}
                        variant="unstyled"
                        aria-label='Previous'
                        icon={<NavigationLeft />}
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            left: "5px",
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        Prev Modal
                    </IconButton>
                    <IconButton
                        onClick={handleNextModal}
                        variant="unstyled"
                        aria-label='Next'
                        icon={<NavigationRight />}
                        style={{
                            display:'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: "5px",
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        Next Modal
                    </IconButton>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Popup;
