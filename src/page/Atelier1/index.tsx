import React, {useEffect, useState} from 'react'
import { Box, Image } from '@chakra-ui/react'
import Popup from '../../global/components/Modal'
import Overlay from '../../global/components/Overlay'
import Morimoto from '../../image/ModalImage/morimoto.png'
import Atelier1Map from '../../global/components/maps/Atelier1Map'

const Atelier1 = () => {
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
        currentModal === 8 ? setCurrentModal(1) : setCurrentModal(currentModal + 1)
    }
    const handlePrevModal = () => {
        currentModal === 1 ? setCurrentModal(8) : setCurrentModal(currentModal - 1)
    }
    const containerBox = {
        width: '100vw',
        height: '100vh'
    }
    return(
        <Box sx={containerBox}>
            <Overlay isOpen={(currentModal > 0)} />
            <Atelier1Map />
            <Popup
                id={1}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 159.359 }}
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
                buttonPosition={{width: 9.18, height: 141.349 }}
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
                buttonPosition={{width: 9.18, height: 123.349 }}
                isOpen={(3 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='03'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
            <Popup
                id={4}
                viewportSize={viewportSize}
                buttonPosition={{width: 9.18, height: 105.358 }}
                isOpen={(4 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='04'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
            <Popup
                id={5}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 105.358 }}
                isOpen={(5 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='05'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
            <Popup
                id={6}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 123.349 }}
                isOpen={(6 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='06'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
            <Popup
                id={7}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 141.349 }}
                isOpen={(7 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='07'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
            <Popup
                id={8}
                viewportSize={viewportSize}
                buttonPosition={{width: -9.18, height: 159.359 }}
                isOpen={(8 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='08'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
        </Box>
    )
}

export default Atelier1