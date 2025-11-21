import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import PopupButton from "../../global/components/PopupButton";
import PopupDrawer from "../../global/components/PopupDrawer";
import Overlay from "../../global/components/Overlay";
import Atelier1Map from "../../global/components/maps/Atelier1Map";
import OpenFade from "../../global/components/OpenFade";
import PageTabs from "../../global/components/PageTabs";
import { PopupContent } from "../../notion/types";

interface Props {
  currentModal: number;
  setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
  handleNextModal: () => void;
  handlePrevModal: () => void;
  data: PopupContent[];
}

const Atelier1: React.FC<Props> = ({
  currentModal,
  setCurrentModal,
  handleNextModal,
  handlePrevModal,
  data,
}) => {
  const [popupContents, setPopupContents] = useState<PopupContent[]>([]);

  const viewportSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const atelier1Data = data.filter(
      (content) => content.id >= 9 && content.id <= 12,
    );
    setPopupContents(atelier1Data);
  }, [data]);

  return (
    <>
      <OpenFade shouldFade={state}>
        <Box sx={{ width: viewportSize.width, height: viewportSize.height }}>
          <Overlay isOpen={currentModal > 0} />
          <Atelier1Map />
          {popupContents.map((content) => (
            <PopupButton
              key={content.id}
              id={content.id}
              viewportSize={viewportSize}
              buttonPosition={content.buttonPosition}
              modalButtonContent={content.id.toString()}
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
      <PageTabs />
    </>
  );
};

export default Atelier1;
