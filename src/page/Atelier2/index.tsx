import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Popup from '../../global/components/Modal';
import Overlay from '../../global/components/Overlay';
import Morimoto from '../../image/ModalImage/morimoto.png';
import Atelier2Map from '../../global/components/maps/Atelier2Map';
import OpenFade from '../../global/components/OpenFade';
import { PopupContent } from '../../notion/types';
import { fetchModalContents } from '../../notion/api';

interface Props {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
    handleNextModal: () => void;
    handlePrevModal: () => void;
}

const Atelier2: React.FC<Props> = ({ 
    currentModal, 
    setCurrentModal, 
    handleNextModal, 
    handlePrevModal 
}) => {
    const [viewportSize, setViewportSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [popupContents, setPopupContents] = useState<PopupContent[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const loadNotionData = async () => {
            try {
                setIsLoading(true);
                const data = await fetchModalContents();
                // Atelier2用のデータをフィルタリング（ID 21-24）
                const atelier2Data = data.filter(content => 
                    content.id >= 21 && content.id <= 24
                );
                setPopupContents(atelier2Data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch modal contents');
            } finally {
                setIsLoading(false);
            }
        };
        
        loadNotionData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <OpenFade shouldFade={state}>
                <Box sx={{ width: '100vw', height: '100vh' }}>
                    <Overlay isOpen={currentModal > 0} />
                    <Atelier2Map />
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