import React, {useEffect, useState} from 'react'
import { Box, Fade } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Popup from '../../global/components/Modal'
import Overlay from '../../global/components/Overlay'
import Morimoto from '../../image/ModalImage/morimoto.png'
import Atelier1Map from '../../global/components/maps/Atelier1Map'
import OpenFade from '../../global/components/OpenFade'

interface props {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>
    handleNextModal: () => void;
    handlePrevModal: () => void;
}


const Atelier1: React.FC<props> = ({ currentModal, setCurrentModal, handleNextModal, handlePrevModal }) => {
    const [viewportSize, setViewportSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    })
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
        return()=>{
            window.removeEventListener('resize', handleResize)
        }
    })

    const containerBox = {
        width: '100vw',
        height: '100vh'
    }
    return(
        <OpenFade shouldFade={state}>
            <Box sx={containerBox}>
                <Overlay isOpen={(currentModal > 0)} />
                <Atelier1Map />
                <Popup
                    id={13}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 159.359 }}
                    isOpen={(13 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='13'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={14}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 141.349 }}
                    isOpen={(14 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='14'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={15}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 123.349 }}
                    isOpen={(15 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='15'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={16}
                    viewportSize={viewportSize}
                    buttonPosition={{width: 9.18, height: 105.358 }}
                    isOpen={(16 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='16'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={17}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 105.358 }}
                    isOpen={(17 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='17'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={18}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 123.349 }}
                    isOpen={(18 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='18'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={19}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 141.349 }}
                    isOpen={(19 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='19'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
                <Popup
                    id={20}
                    viewportSize={viewportSize}
                    buttonPosition={{width: -9.18, height: 159.359 }}
                    isOpen={(20 === currentModal)}
                    modalImage={Morimoto}
                    modalTitle='香音歩'
                    name='森本結暉ルーク B3'
                    modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                    modalButtonContent='20'
                    onNextModal={handleNextModal}
                    onPrevModal={handlePrevModal}
                    setCurrentModal={setCurrentModal}
                />
            </Box>
        </OpenFade>
    )
}

export default Atelier1