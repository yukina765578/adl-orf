import React, {useEffect, useState} from 'react'
import { Box, Fade } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Popup from '../../global/components/Modal'
import Overlay from '../../global/components/Overlay'
import Morimoto from '../../image/ModalImage/morimoto.png'
import Atelier1Map from '../../global/components/maps/Atelier1Map'
import OpenFade from '../../global/components/OpenFade'

interface props {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>
    handleNextModal: () => void;
    handlePrevModal: () => void;
}


const Atelier1: React.FC<props> = ({ currentModal, setCurrentModal, handleNextModal, handlePrevModal }) => {
    const [viewportSize, setViewportSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    })
    const location = useLocation();
    const { state } = location;
    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return()=>{
            window.removeEventListener('resize', handleResize)
        }
    })

    const containerBox = {
        width: '100vw',
        height: '100vh'
    }
    return(
        <OpenFade shouldFade={state}>
            <Box sx={containerBox}>
                <Overlay isOpen={(currentModal > 0)} />
                <Atelier1Map />
                <Popup
                    id={13}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 159.359 }}
                    isOpen={(13 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル13'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='13'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={14}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 141.349 }}
                    isOpen={(14 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル14'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='14'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={15}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 123.349 }}
                    isOpen={(15 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル15'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='15'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={16}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 105.358 }}
                    isOpen={(16 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル16'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='16'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={17}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 105.358 }}
                    isOpen={(17 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル17'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='17'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={18}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 123.349 }}
                    isOpen={(18 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル18'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='18'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={19}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 141.349 }}
                    isOpen={(19 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル19'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='19'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={20}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 159.359 }}
                    isOpen={(20 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='タイトル20'
                    name='名前 B3'
                    modalContent='Caption'
                    modalButtonContent='20'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
            </Box>
        </OpenFade>
    )
}

export default Atelier1