import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import PopupButton from "../../global/components/PopupButton";
import PopupDrawer from "../../global/components/PopupDrawer";
import Overlay from "../../global/components/Overlay";
import LoungeMap from "../../global/components/maps/LoungeMap";
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

const Lounge: React.FC<Props> = ({
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
    const loungeData = data.filter(
      (content) => (content.id >= 1 && content.id <= 4) || (content.id >= 13 && content.id <= 16),
    );
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
              modalButtonContent={content.id.toString().padStart(2, "0")}
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

export default Lounge;
