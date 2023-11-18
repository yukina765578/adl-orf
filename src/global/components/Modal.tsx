import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
    Box
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'


interface PopupProps {
    id: number,
    isOpen: boolean;
    modalTitle: string;
    modalContent: string;
    modalButtonContent: string;
    onNextModal: () => void;
    onPrevModal: () => void;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
}

const Popup: React.FC<PopupProps> = ({ id, isOpen, modalTitle, modalContent, modalButtonContent, onNextModal, onPrevModal, setCurrentModal }) => {
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
    return(
        <>
            <Button onClick={handleOnOpen}>{modalButtonContent}</Button>
            <Modal isCentered isOpen={isOpen} onClose={handleOnClose} size="md">
                <ModalContent height="60vh">
                    <Box margin={5}>
                        <ModalHeader>{modalTitle}</ModalHeader>
                        <ModalBody>
                            {modalContent}
                        </ModalBody>
                    </Box>
                    <ModalCloseButton />
                    <ModalFooter width='100%'>
                        <IconButton onClick={handlePrevModal} variant="unstyled" fontSize={36} aria-label='Previous' icon={<ChevronLeftIcon />} position='absolute' left="5px" bottom='48%'>Prev Modal</IconButton>
                        <IconButton onClick={handleNextModal} variant="unstyled" fontSize={36} aria-label='Next' icon={<ChevronRightIcon />} position='absolute' right="5px" bottom='48%'>Next Modal</IconButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default Popup