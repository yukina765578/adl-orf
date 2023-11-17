import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Lounge from '../page/Lounge';
import Atelier1 from '../page/Atelier1';
import Atelier2 from '../page/Atelier2';

const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path='/lounge' element={<Lounge />} />
            <Route path='/atelier1' element={<Atelier1 />} />
            <Route path='/atelier2' element={<Atelier2 />} />
        </Routes>
    );
}

export default AppRoutes