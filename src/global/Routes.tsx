import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Lounge from '../page/Lounge';
import Atelier1 from '../page/Atelier1';
import Atelier2 from '../page/Atelier2';

const AppRoutes: React.FC = () => {
    const [currentModal, setCurrentModal] = useState<number>(0);
    const navigate = useNavigate()
    const handleNextModal = () => {
        currentModal === 24 ? setCurrentModal(1) : setCurrentModal(currentModal + 1)
    }
    const handlePrevModal = () => {
        currentModal === 1 ? setCurrentModal(24) : setCurrentModal(currentModal - 1)
    }

    useEffect(() => {
        console.log(currentModal)
        if (currentModal <= 12 && currentModal > 0) {
            navigate('/lounge', { state:{shouldFade: true}});
        } else if (currentModal > 12 && currentModal <= 20) {
            navigate('/atelier1', { state:{shouldFade: true}});
        } else if(currentModal > 20) {
            navigate('/atelier2', { state:{shouldFade: true}})
        }
    }, [currentModal, navigate]);

    return(
        <Routes>
            <Route path='/lounge' element={<Lounge {...{currentModal, setCurrentModal, handleNextModal, handlePrevModal}} />} />
            <Route path='/atelier1' element={<Atelier1 {...{currentModal, setCurrentModal, handleNextModal, handlePrevModal}} />} />
            <Route path='/atelier2' element={<Atelier2 {...{currentModal, setCurrentModal, handleNextModal, handlePrevModal}} />} />
        </Routes>
    );
}

export default AppRoutes