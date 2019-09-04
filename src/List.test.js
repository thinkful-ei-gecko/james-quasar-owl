import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';


describe('List test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={1}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders same UI', () => {
    const tree = renderer.create(<List key={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });



});