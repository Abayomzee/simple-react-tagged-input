import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSimpleTaggedInput from '../src/index';

const App = () => {
  return (
    <div>
      <ReactSimpleTaggedInput placeholder='You?' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
