import React, { useEffect } from 'react';

interface PreloadImagesProps {
    onPreloadComplete?: () => void;
}

const PreloadImages: React.FC<PreloadImagesProps> = ({ onPreloadComplete }) => {
    useEffect(() => {
        const Atelier1 = new Image();
        Atelier1.src = '../../image/Atelier1/map.png';
        Atelier1.onload = () => onImageLoad('Atelier1');

        const Lounge = new Image();
        Lounge.src = '../../image/Lounge/map.png';
        Lounge.onload = () => onImageLoad('Lounge');

        const Atelier2 = new Image();
        Atelier2.src = '../../image/Atelier2/map.png';
        Atelier2.onload = () => onImageLoad('Atelier2');

        const modalImage = new Image();
        modalImage.src = '../../image/ModalImage/morimoto.png';
        modalImage.onload = () => onImageLoad('ModalImage');

        let loadedImages = 0;

        const onImageLoad = (image: string) => {
            loadedImages++;
            if (loadedImages === 4) {
                if (onPreloadComplete && typeof onPreloadComplete === 'function') {
                    onPreloadComplete();
                }
            }
        };
    }, [onPreloadComplete]);

    return <></>;
};

export default PreloadImages;