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

  // Data to display
  return (
    <div className="container">
      <div className="center">{JSON.stringify(selected || [])}</div>
      <br />
      <br />
      <ReactSimpleTaggedInput
        onInputChange={setSelected}
        onRemoveTag={tag => handleTagRemove(tag)}
        onAddTag={tag => handleTagAdd(tag)}
        containerClassName="wrapper"
        containerStyle={{
          border: '2px solid rgba(118, 118, 118, 0.293)',
          color: '#170080',
          padding: '4px',
          borderRadius: '6px',
        }}
        tagStyle={{ fontWeight: '700', color: 'red' }}
        tagRemoveButton={{
          icon: 'times',
          iconStyle: { color: 'white' },
          buttonStyle: { backgroundColor: 'blue' },
        }}
        autoFocus
        onExisting={() => console.log('Existing...')}
        canDuplicate
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
