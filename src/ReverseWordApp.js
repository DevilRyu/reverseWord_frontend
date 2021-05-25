import React from 'react'
import {Provider} from 'react-redux';

import { MainScreen } from './components/MainScreen'
import { Topbar } from './components/Topbar'
import { store } from './store/store';

export const ReverseWordApp = () => {
    return (
        <Provider store={store}>
            <Topbar />
            <MainScreen />
        </ Provider>
    )
}
