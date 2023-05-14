import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSimpleTaggedInput from '../src/index';

const App = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <div>
      {JSON.stringify(selected || [])}
      <br />
      <br />
      <ReactSimpleTaggedInput onInputChange={setSelected} autoFocus />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
