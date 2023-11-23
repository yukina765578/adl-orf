import React, { useEffect, useState } from'react';
import {Box, Image, Fade } from '@chakra-ui/react'
import Floor1 from '../../image/Home/1f.png'
import Floor2 from '../../image/Home/2f.png'
import NavigationButton from '../../global/components/NavigationButton';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface homeProp {
    headerHeight: number
}
const Home: React.FC<homeProp> = ({headerHeight}) => {
    const navigate = useNavigate();
    
    const [viewportSize, setViewportSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    })
    const [image1Size, setImage1Size] = useState({
        width: 0,
        height: 0
    })
    const [image1Position, setImage1Position] = useState({
        top: 0,
        left: 0
    })
    const [image2Size, setImage2Size] = useState({
        width: 0,
        height: 0
    })
    const [image2Position, setImage2Position] = useState({
        top: 0,
        left: 0
    })
    const floor1Ref = useRef<HTMLDivElement>(null)
    const floor2Ref = useRef<HTMLDivElement>(null)
    const contentHeight = viewportSize.height - headerHeight
    const contentBox = {
        position: 'absolute',
        top: `${headerHeight}px`,
        width: '100vw',
        height: contentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    }
    const floorBox = {
        width: '100vw',
        height: contentHeight / 2,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
    const imageStyle = {
        width: '100%',
        height: contentHeight / 2,
        transform: 'scale(1)',
        opacity: 0.7,
    }
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
    useEffect(() => {
        if (floor1Ref.current) {
          const rect = floor1Ref.current.getBoundingClientRect();
          setImage1Position({ top: rect.top, left: rect.left });
          setImage1Size({ width: rect.width, height: rect.height })
        }
        
    }, [headerHeight]);
    useEffect(() => {
        if (floor2Ref.current) {
          const rect = floor2Ref.current.getBoundingClientRect();
          setImage2Position({ top: rect.top, left: rect.left });
          setImage2Size({ width: rect.width, height: rect.height });
        }
    }, [headerHeight]);

    const handleOnClickLounge = () => {
        navigate('/lounge');
    };

    const handleOnClickAtelier1 = () => {
        navigate('/atelier1');
    }

    const handleOnClickAtelier2 = () => {
        navigate('/atelier2');
    }

    return(
        <Fade in={true} transition={{enter: {duration: 0.3}, exit: {duration: 0.3}}}>
            <Box sx={contentBox}>
                <Box sx={floorBox} ref={floor2Ref}>
                    <Image
                        src={Floor2}
                        style={imageStyle}
                        objectFit={'contain'}
                    />
                    <NavigationButton imagePosition={image2Position} imageSize={image2Size} buttonPosition={{width: 366.716, height: 222.66 }} headerHeight={headerHeight} handleOnClick={handleOnClickAtelier2} />
                </Box>
                <NavigationButton imagePosition={image2Position} imageSize={image2Size} buttonPosition={{width: 366.716, height: 222.66 }} headerHeight={headerHeight} handleOnClick={handleOnClickAtelier2} />
                <Box sx={floorBox} ref={floor1Ref}>
                    <Image
                        src={Floor1}
                        style={imageStyle}
                        objectFit={'contain'}
                    />
                    <NavigationButton imagePosition={image1Position} imageSize={image1Size} buttonPosition={{width: 397.216, height: 126.008 }} headerHeight={headerHeight} handleOnClick={handleOnClickLounge}/>
                    <NavigationButton imagePosition={image1Position} imageSize={image1Size} buttonPosition={{width: 116.716, height: 197.936 }} headerHeight={headerHeight} handleOnClick={handleOnClickAtelier1} />
                </Box>
            </Box>    
        </Fade>
        
    )
}

export default Home