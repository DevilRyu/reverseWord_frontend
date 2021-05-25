import React from 'react';
import renderer from 'react-test-renderer';
import { Item } from '../../components/Item';

describe('Pruebas en el componente - <Item />', () => {

  test('Debe de mostrarse correctamente', async () => {

    const component = renderer.create(
      <Item word="test" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

});