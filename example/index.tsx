import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSimpleTaggedInput from '../src/index';

const App = () => {
  // States
  const [selected, setSelected] = React.useState([]);

  // Methods
  const handleTagRemove = tag => {
    alert(`${tag} has been removed`);
  };

  // Data to display
  return (
    <div>
      {JSON.stringify(selected || [])}
      <br />
      <br />
      <ReactSimpleTaggedInput
        onInputChange={setSelected}
        onRemoveTag={(tag) => handleTagRemove(tag)}
        autoFocus
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
