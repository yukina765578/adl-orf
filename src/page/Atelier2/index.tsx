import React, {useEffect, useState} from 'react'
import { Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Popup from '../../global/components/Modal'
import Overlay from '../../global/components/Overlay'
import Morimoto from '../../image/ModalImage/morimoto.png'
import Atelier2Map from '../../global/components/maps/Atelier2Map'
import OpenFade from '../../global/components/OpenFade'

interface props {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
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
        <>
            <OpenFade shouldFade={state}>
                <Box sx={containerBox}>
                    <Overlay isOpen={(currentModal > 0)} />
                    <Atelier2Map />
                    <Popup
                        id={21}
                        viewportSize={viewportSize}
                        buttonPosition={{width: 0, height: 168.959 }}
                        isOpen={(21 === currentModal)}
                        modalImage={Morimoto}
                        modalTitle='タイトル21'
                        name='名前 B3'
                        modalContent='Caption'
                        modalButtonContent='21'
                        onNextModal={handleNextModal}
                        onPrevModal={handlePrevModal}
                        setCurrentModal={setCurrentModal}
                    />
                    <Popup
                        id={22}
                        viewportSize={viewportSize}
                        buttonPosition={{width: 0, height: 144.569 }}
                        isOpen={(22 === currentModal)}
                        modalImage={Morimoto}
                        modalTitle='タイトル22'
                        name='名前 B3'
                        modalContent='Caption'
                        modalButtonContent='22'
                        onNextModal={handleNextModal}
                        onPrevModal={handlePrevModal}
                        setCurrentModal={setCurrentModal}
                    />
                    <Popup
                        id={23}
                        viewportSize={viewportSize}
                        buttonPosition={{width: 0, height: 120.074 }}
                        isOpen={(23 === currentModal)}
                        modalImage={Morimoto}
                        modalTitle='タイトル23'
                        name='名前 B3'
                        modalContent='Caption'
                        modalButtonContent='23'
                        onNextModal={handleNextModal}
                        onPrevModal={handlePrevModal}
                        setCurrentModal={setCurrentModal}
                    />
                    <Popup
                        id={24}
                        viewportSize={viewportSize}
                        buttonPosition={{width: 0, height: 95.809 }}
                        isOpen={(24 === currentModal)}
                        modalImage={Morimoto}
                        modalTitle='タイトル24'
                        name='名前 B3'
                        modalContent='Caption'
                        modalButtonContent='24'
                        onNextModal={handleNextModal}
                        onPrevModal={handlePrevModal}
                        setCurrentModal={setCurrentModal}
                    />
                </Box>
            </OpenFade>
        </>
        
    )
}

export default Atelier1