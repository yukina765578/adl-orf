import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../page/Home';
import Lounge from '../page/Lounge';
import Atelier1 from '../page/Atelier1';
import Atelier2 from '../page/Atelier2';
import { PopupContent } from '../notion/types';

interface appRoutesProps {
    headerHeight: number;
    data: PopupContent[];
}

const AppRoutes: React.FC<appRoutesProps> = ({headerHeight, data}) => {
    console.log(headerHeight)
    const [currentModal, setCurrentModal] = useState<number>(0);
    const navigate = useNavigate()
    const handleNextModal = () => {
        currentModal === 24 ? setCurrentModal(1) : setCurrentModal(currentModal + 1)
    }
    const handlePrevModal = () => {
        currentModal === 1 ? setCurrentModal(24) : setCurrentModal(currentModal - 1)
    }

    useEffect(() => {
        if (currentModal <= 10 && currentModal > 0) {
            navigate('/adl-orf/lounge', { state:{shouldFade: true}});
        } else if (currentModal > 10 && currentModal <= 14) {
            navigate('/adl-orf/atelier2', { state:{shouldFade: true}});
        } else if(currentModal > 14) {
            navigate('/adl-orf/atelier1', { state:{shouldFade: true}})
        }
    }, [currentModal, navigate]);

    return(
        <Routes>
            <Route path='/adl-orf' element={<Home headerHeight={headerHeight}/>} />
            <Route path='/adl-orf/lounge' element={<Lounge {...{currentModal, setCurrentModal, handleNextModal, handlePrevModal, headerHeight, data}} />} />
            <Route path='/adl-orf/atelier1' element={<Atelier1 {...{currentModal, setCurrentModal, handleNextModal, handlePrevModal, headerHeight, data}} />} />
            <Route path='/adl-orf/atelier2' element={<Atelier2 {...{currentModal, setCurrentModal, handleNextModal, handlePrevModal, headerHeight, data}} />} />
        </Routes>
    );
}

export default AppRoutes
