import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import PopupButton from '../../global/components/PopupButton';
import PopupDrawer from '../../global/components/PopupDrawer';
import Overlay from '../../global/components/Overlay';
import Morimoto from '../../image/ModalImage/morimoto.png';
import LoungeMap from '../../global/components/maps/LoungeMap';
import OpenFade from '../../global/components/OpenFade';
import { PopupContent } from '../../notion/types';

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
                <Box sx={{ width: viewportSize.width, height: viewportSize.height }}>
                    <Overlay isOpen={currentModal > 0} />
                    <LoungeMap />
                    {popupContents.map((content) => (
                        <PopupButton
                            key={content.id}
                            id={content.id}
                            viewportSize={viewportSize}
                            buttonPosition={content.buttonPosition}
                            modalButtonContent={content.id.toString().padStart(2, '0')}
                            setCurrentModal={setCurrentModal}
                        />
                    ))}
                </Box>
            </OpenFade>
            <PopupDrawer
                currentModal={currentModal}
                setCurrentModal={setCurrentModal}
                popupContents={popupContents}
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
            />
        </>
    );
};

export default Lounge;
