import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Popup from '../../global/components/Modal';
import Overlay from '../../global/components/Overlay';
import Morimoto from '../../image/ModalImage/morimoto.png';
import Atelier1Map from '../../global/components/maps/Atelier1Map';
import OpenFade from '../../global/components/OpenFade';
import { PopupContent } from '../../notion/types';
import { fetchModalContents } from '../../notion/api';

interface Props {
  currentModal: number;
  setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
  handleNextModal: () => void;
  handlePrevModal: () => void;
}

const Atelier1: React.FC<Props> = ({ 
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
        setPopupContents(data);
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
          <Atelier1Map />
          {popupContents.map((content) => (
            <Popup
              key={content.id}
              id={content.id}
              viewportSize={viewportSize}
              buttonPosition={content.buttonPosition}
              isOpen={content.id === currentModal}
              modalImage={content.modalImage || Morimoto} // NotionのイメージURLを使用、なければフォールバック
              modalTitle={content.modalTitle}
              name={content.name}
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

export default Atelier1;