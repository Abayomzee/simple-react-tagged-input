import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactSimpleTaggedInput } from '../.';

const App = () => {
  return (
    <div>
      <ReactSimpleTaggedInput />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
