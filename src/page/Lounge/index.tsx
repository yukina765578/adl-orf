import React, {useEffect, useState} from 'react'
import { Box, Image } from '@chakra-ui/react'
import Popup from '../../global/components/Modal'
import Overlay from '../../global/components/Overlay'
import Map from '../../image/Lounge/map.png'
import Morimoto from '../../image/ModalImage/morimoto.png'
import LoungeMap from '../../global/components/maps/LoungeMap'

const Lounge = () => {
    const [currentModal, setCurrentModal] = useState<number>(0);
    const [viewportSize, setViewportSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    })
    console.log(viewportSize.width)
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

    const handleNextModal = () => {
        currentModal === 3 ? setCurrentModal(1) : setCurrentModal(currentModal + 1)
    }
    const handlePrevModal = () => {
        currentModal === 1 ? setCurrentModal(3) : setCurrentModal(currentModal - 1)
    }
    const containerBox = {
        width: '100vw',
        height: '100vh'
    }
    return(
        <Box sx={containerBox}>
            <Overlay isOpen={(currentModal > 0)} />
            <LoungeMap />
            <Popup
                id={1}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 170.111 }}
                isOpen={(1 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='01'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={2}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 154.898 }}
                isOpen={(2 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='02'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={3}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 139.898 }}
                isOpen={(3 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル３'
                name='名前３'
                modalContent='Caption'
                modalButtonContent='03'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={4}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 124.898 }}
                isOpen={(4 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル4'
                name='名前'
                modalContent='Caption'
                modalButtonContent='04'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={5}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 110.389 }}
                isOpen={(5 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル5'
                name='名前'
                modalContent='Caption'
                modalButtonContent='05'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={6}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 94.408 }}
                isOpen={(6 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル6'
                name='名前'
                modalContent='Caption'
                modalButtonContent='06'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={7}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 94.408 }}
                isOpen={(7 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル7'
                name='名前'
                modalContent='Caption'
                modalButtonContent='07'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={8}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 110.389 }}
                isOpen={(8 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル8'
                name='名前'
                modalContent='Caption'
                modalButtonContent='08'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={9}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 124.898 }}
                isOpen={(9 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル9'
                name='名前'
                modalContent='Caption'
                modalButtonContent='09'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={10}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 139.898 }}
                isOpen={(10 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル10'
                name='名前'
                modalContent='Caption'
                modalButtonContent='10'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={11}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 154.898 }}
                isOpen={(11 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル11'
                name='名前'
                modalContent='Caption'
                modalButtonContent='11'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={12}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 170.111 }}
                isOpen={(12 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル12'
                name='名前'
                modalContent='Caption'
                modalButtonContent='12'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
        </Box>
    )
}

export default Lounge