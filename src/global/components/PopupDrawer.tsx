import React from 'react';
import {
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
import { PopupContent } from '../../notion/types';

interface PopupDrawerProps {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
    popupContents: PopupContent[];
    onNextModal: () => void;
    onPrevModal: () => void;
}

const PopupDrawer: React.FC<PopupDrawerProps> = ({
    currentModal,
    setCurrentModal,
    popupContents,
    onNextModal,
    onPrevModal
}) => {
    const isOpen = currentModal > 0;
    const currentContent = popupContents.find(content => content.id === currentModal);

    const handleOnClose = () => {
        setCurrentModal(0);
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

    if (!currentContent) {
        return null;
    }

    return (
        <Drawer isOpen={isOpen} onClose={handleOnClose} placement="bottom" size="full">
            <DrawerOverlay />
            <DrawerContent height="100vh" padding='40px' position="relative">
                <DrawerCloseButton />
                <DrawerBody overflowY='auto' maxWidth="600px" margin="0 auto" width="100%">
                    {currentContent.modalImage && (
                        <>
                            <Box style={imageBox}>
                                <Image
                                    style={{width: '100%', height: '100%', borderRadius: '5px', objectFit: 'contain'}}
                                    src={currentContent.modalImage}
                                />
                            </Box>
                            <Divider marginTop={3} marginBottom={3}/>
                        </>
                    )}
                    <Box>
                        <Heading style={titleStyle} fontWeight={600}>{currentContent.modalTitle}</Heading>
                        <Text style={nameStyle} fontWeight={600}>{`${currentContent.name} ${currentContent.grade}`}</Text>
                        <Text style={textStyle}
                          sx={{ whiteSpace: 'pre-wrap' }}
                        >
                            {currentContent.modalContent}
                        </Text>
                        {currentContent.contentUrl && currentContent.contentUrl.length > 0 && (
                            <>
                                <Text style={linkTitleStyle}>リンク:</Text>
                                {currentContent.contentUrl.map((url, index) => (
                                    <Link
                                        key={index}
                                        href={url}
                                        isExternal
                                        color="blue.500"
                                        fontSize="12px"
                                        textDecoration="underline"
                                        sx={{ wordBreak: 'break-all', display: 'block' }}
                                    >
                                        {url}
                                    </Link>
                                ))}
                            </>
                        )}
                    </Box>
                </DrawerBody>
                <IconButton
                    onClick={onPrevModal}
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
                    onClick={onNextModal}
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
    );
};

export default PopupDrawer;