import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSimpleTaggedInput from '../src/index';

const App = () => {
  // States
  const [selected, setSelected] = React.useState([]);

  // Methods
  const handleTagRemove = tag => {
    console.log(`${tag} has been removed`);
  };

  const handleTagAdd = tag => {
    console.log(`${tag} has been added`);
  };

  // Data to display
  return (
    <div>
      {JSON.stringify(selected || [])}
      <br />
      <br />
      <ReactSimpleTaggedInput
        onInputChange={setSelected}
        onRemoveTag={tag => handleTagRemove(tag)}
        onAddTag={tag => handleTagAdd(tag)}
        autoFocus
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
