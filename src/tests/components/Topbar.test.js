import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';

import { Provider } from 'react-redux';
import { Topbar } from '../../components/Topbar';
import { wordStartAddNew } from '../../actions/words';

jest.mock('../../actions/words', () => {
    return {
        wordStartAddNew: jest.fn(),
    }
});



const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en el componente - <Topbar />', () => {

    test('Debe de mostrarse correctamente', async () => {

        const component = renderer.create(
            <Provider store={store}>
                <Topbar />
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    test('Debe agregar la nueva palabra', async () => {

        const component = mount(
            <Provider store={store}>
                <Topbar />
            </Provider>
        );
        component.find('input[name="text"]').simulate('change', {
            target: {
                name: 'text',
                value: 'Hola'
            }
        });

        component.find('form').simulate('submit',{
            preventDefaault(){}
        });

        expect(wordStartAddNew).toHaveBeenCalledWith('Hola');

    });

});