import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSimpleTaggedInput from '../src/index';
import './app.css';

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

  const handleTagExist = tag => {
    console.log(`${tag} already exit`);
  };

  // Data to display
  return (
    <div className="container">
      <div className="">{JSON.stringify(selected)}</div>

      <ReactSimpleTaggedInput
        onInputChange={setSelected}
        onRemoveTag={handleTagRemove}
        onAddTag={handleTagAdd}
        onExisting={handleTagExist}
        autoFocus
        style={{
          border: '2px solid gray',
          borderRadius: '5px',
          padding: '7px',
          maxWidth: '200px',
        }}
        inputStyle={{ border: '1px solid red', width: 'fit-content' }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
