import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.js';
import renderer from 'react-test-renderer';

describe('Stage tests', () => {
  it('renders without breaking', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage key={1}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders same UI', () => {
    const tree = renderer.create(<Stage key={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});