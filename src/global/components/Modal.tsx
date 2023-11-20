import React, { useState } from 'react';
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
    Text
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { NavigationRight } from './NavigationRight';
import { NavigationLeft } from './NavigationLeft';

interface PopupProps {
    id: number,
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

const Popup: React.FC<PopupProps> = ({ id, isOpen, modalImage, modalTitle, name, modalContent, modalButtonContent, onNextModal, onPrevModal, setCurrentModal }) => {
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
    const imageBox = {
        width: '100%',
        height: '40%',
        marginBottom: 10
    }
    const titleStyle ={
        fontSize: 36,
        marginTop: 10,
        marginBottom: 5
    }
    const nameStyle = {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        letterSpacing: 0.8
    }
    const textStyle = {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.8
    }
    return(
        <>
            <Button onClick={handleOnOpen}>{modalButtonContent}</Button>
            <Modal isCentered isOpen={isOpen} onClose={handleOnClose} size='md'>
                <ModalContent height="80vh" padding='40px'>
                    <Box style={imageBox}>
                        <Image style={{width: '100%', height: '100%', borderRadius: '5px'}} src={modalImage} />
                    </Box>
                    <Box>
                        <Heading style={titleStyle} fontWeight={600}>{modalTitle}</Heading>
                        <Text style={nameStyle} fontWeight={600}>{name}</Text>
                        <Text style={textStyle}>
                            {modalContent}
                        </Text>
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