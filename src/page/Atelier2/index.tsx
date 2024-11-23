import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Popup from '../../global/components/Modal';
import Overlay from '../../global/components/Overlay';
import Morimoto from '../../image/ModalImage/morimoto.png';
import Atelier2Map from '../../global/components/maps/Atelier2Map';
import OpenFade from '../../global/components/OpenFade';
import { PopupContent } from '../../notion/types';

interface Props {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
    handleNextModal: () => void;
    handlePrevModal: () => void;
    data: PopupContent[];
}

const Atelier2: React.FC<Props> = ({ 
    currentModal, 
    setCurrentModal, 
    handleNextModal, 
    handlePrevModal,
    data
}) => {
    const [popupContents, setPopupContents] = useState<PopupContent[]>([]);

    const viewportSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        const atelier2Data = data.filter(content => 11 <= content.id && content.id <= 14);
        setPopupContents(atelier2Data);
    }, [data]);

    return (
        <>
            <OpenFade shouldFade={state}>
                <Box sx={{ width: viewportSize.width, height: viewportSize.height }}>
                    <Overlay isOpen={currentModal > 0} />
                    <Atelier2Map />
                    {popupContents.map((content) => (
                        <Popup
                            key={content.id}
                            id={content.id}
                            viewportSize={viewportSize}
                            buttonPosition={content.buttonPosition}
                            isOpen={content.id === currentModal}
                            modalImage={content.modalImage}
                            modalTitle={content.modalTitle}
                            name={`${content.name} ${content.grade}`}
                            modalContent={content.modalContent}
                            contentUrl={content.contentUrl}
                            modalButtonContent={content.id.toString()}
                            onNextModal={handleNextModal}
                            onPrevModal={handlePrevModal}
                            setCurrentModal={setCurrentModal}
                        />
                    ))}
                </Box>
            </OpenFade>
        </>
    );
};

export default Atelier2;
