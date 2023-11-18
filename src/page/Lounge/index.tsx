import React, {useEffect, useState} from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Popup from '../../global/components/Modal'
import Overlay from '../../global/components/Overlay'

const Lounge = () => {
    const [currentModal, setCurrentModal] = useState<number>(0);

    const handleNextModal = () => {
        currentModal === 3 ? setCurrentModal(1) : setCurrentModal(currentModal + 1)
    }

    const handlePrevModal = () => {
        currentModal === 1 ? setCurrentModal(3) : setCurrentModal(currentModal - 1)
    }

    return(
        <Box>
            <Overlay isOpen={(currentModal > 0)} />
            <Heading>Lounge</Heading>
            <Popup
                id={1}
                isOpen={(1 === currentModal)}
                modalTitle='Title1'
                modalContent='Captions'
                modalButtonContent='button1'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={2}
                isOpen={(2 === currentModal)}
                modalTitle='Title2'
                modalContent='Captions'
                modalButtonContent='button2'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={3}
                isOpen={(3 === currentModal)}
                modalTitle='Title3'
                modalContent='Captions'
                modalButtonContent='button3'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
        </Box>
    )
}

export default Lounge