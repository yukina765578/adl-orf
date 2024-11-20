import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Popup from '../../global/components/Modal';
import Overlay from '../../global/components/Overlay';
import Morimoto from '../../image/ModalImage/morimoto.png';
import LoungeMap from '../../global/components/maps/LoungeMap';
import OpenFade from '../../global/components/OpenFade';
import { PopupContent } from '../../notion/types';
import { fetchModalContents } from '../../notion/api';

interface Props {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
    handleNextModal: () => void;
    handlePrevModal: () => void;
    data: PopupContent[];
}

const Lounge: React.FC<Props> = ({ 
    currentModal, 
    setCurrentModal, 
    handleNextModal, 
    handlePrevModal,
    data
}) => {
    const [popupContents, setPopupContents] = useState<PopupContent[]>([]);

    const viewportSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
      const loungeData = data.filter(content => 1 <= content.id && content.id <= 10);
      setPopupContents(loungeData);
    }, [data]);

    return (
        <>
            <OpenFade shouldFade={state}>
                <Box sx={{ width: '100%', height: '100%' }}>
                    <Overlay isOpen={currentModal > 0} />
                    <LoungeMap />
                    {popupContents.map((content) => (
                        <Popup
                            key={content.id}
                            id={content.id}
                            viewportSize={viewportSize}
                            buttonPosition={content.buttonPosition}
                            isOpen={content.id === currentModal}
                            modalImage={content.modalImage || Morimoto}
                            modalTitle={content.modalTitle}
                            name={`${content.name} ${content.grade}`}
                            modalContent={content.modalContent}
                            contentUrl={content.contentUrl}
                            modalButtonContent={content.id.toString().padStart(2, '0')}
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

export default Lounge;
