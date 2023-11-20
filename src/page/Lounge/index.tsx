import React, {useEffect, useState} from 'react'
import { Box, Heading, IconButton } from '@chakra-ui/react'
import Popup from '../../global/components/Modal'
import Overlay from '../../global/components/Overlay'
import { NavigationRight } from '../../global/components/NavigationRight'
import Morimoto from '../../image/ModalImage/morimoto.png'

const Lounge = () => {
    const [currentModal, setCurrentModal] = useState<number>(0);

    const handleNextModal = () => {
        currentModal === 3 ? setCurrentModal(1) : setCurrentModal(currentModal + 1)
    }

    const handlePrevModal = () => {
        currentModal === 1 ? setCurrentModal(3) : setCurrentModal(currentModal - 1)
    }

    return(
        <Box>
            <Overlay isOpen={(currentModal > 0)} />
            <Heading>Lounge</Heading>
            <Popup
                id={1}
                isOpen={(1 === currentModal)}
                modalImage={Morimoto}
                modalTitle='香音歩'
                name='森本結暉ルーク B3'
                modalContent='親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）親譲りの無'
                modalButtonContent='button1'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={2}
                isOpen={(2 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル２'
                name='名前２'
                modalContent='キャプション'
                modalButtonContent='button2'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />

            <Popup
                id={3}
                isOpen={(3 === currentModal)}
                modalImage={Morimoto}
                modalTitle='タイトル３'
                name='名前３'
                modalContent='キャプション'
                modalButtonContent='button3'
                onNextModal={handleNextModal}
                onPrevModal={handlePrevModal}
                setCurrentModal={setCurrentModal}
            />
        </Box>
    )
}

export default Lounge