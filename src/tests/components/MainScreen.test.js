import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { MainScreen } from '../../components/MainScreen';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    reverseWord: {
        words: [
            "text",
            "ana"
        ]
    }
};
const store = mockStore(initState);


describe('Pruebas en el componente - <MainScreen />', () => {

    test('Debe de mostrarse correctamente', async () => {

        const component = renderer.create(
            <Provider store={store} >
                <MainScreen />
            </Provider >

        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

});