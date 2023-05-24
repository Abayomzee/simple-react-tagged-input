import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSimpleTaggedInput from '../src/index';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactSimpleTaggedInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
