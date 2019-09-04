import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import renderer from 'react-test-renderer';

describe('Chat tests', () => {
  it('renders without breaking', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat key={1}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render same UI', () => {
    const tree = renderer.create(<Chat key={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

})