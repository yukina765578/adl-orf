import React from 'react';
import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    IconButton,
    Box,
    Image,
    Heading,
    Text,
    Divider
} from '@chakra-ui/react';
import { NavigationRight } from './NavigationRight';
import { NavigationLeft } from './NavigationLeft';

interface PopupProps {
    id: number,
    viewportSize: {width: number, height: number};
    buttonPosition: {width: number, height: number};
    isOpen: boolean;
    modalImage:string;
    modalTitle: string;
    name: string;
    modalContent: string;
    modalButtonContent: string;
    onNextModal: () => void;
    onPrevModal: () => void;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
}

const Popup: React.FC<PopupProps> = ({ id, viewportSize, buttonPosition, isOpen, modalImage, modalTitle, name, modalContent, modalButtonContent, onNextModal, onPrevModal, setCurrentModal }) => {
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
    const leftCoordinate = (viewportSize.width / 2 + viewportSize.height * leftPercentage);
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
    const titleStyle ={
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
    }
    return(
        <>
            <Button onClick={handleOnOpen} sx={buttonStyle}>{modalButtonContent}</Button>
            <Modal isCentered isOpen={isOpen} onClose={handleOnClose} size='sm'>
                <ModalContent height="75vh" maxHeight={699} minHeight={600} padding='40px' >
                    <Box overflowY='auto'>
                        <Box style={imageBox}>
                            <Image style={{width: '100%', height: '100%', borderRadius: '5px', objectFit: 'contain'}} src={modalImage} />
                        </Box>
                        <Divider marginTop={3} marginBottom={3}/>
                        <Box>
                            <Heading style={titleStyle} fontWeight={600}>{modalTitle}</Heading>
                            <Text style={nameStyle} fontWeight={600}>{name}</Text>
                            <Text style={textStyle}>
                                {modalContent}
                            </Text>
                        </Box>
                    </Box>
                    <ModalCloseButton />
                    <ModalFooter width='100%'>
                        <IconButton onClick={handlePrevModal} variant="unstyled" aria-label='Previous' icon={<NavigationLeft />} style={{display:'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: "0px", bottom: '48%'}}>Prev Modal</IconButton>
                        <IconButton onClick={handleNextModal} variant="unstyled" aria-label='Next' icon={<NavigationRight />} style={{display:'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: "0px", bottom: '48%'}}>Next Modal</IconButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default Popup