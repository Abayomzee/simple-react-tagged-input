import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import Tags from '../src/components/Organisms/Tags/index';

const App = () => {
  return (
    <div>
      <Thing />
      <Tags />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
