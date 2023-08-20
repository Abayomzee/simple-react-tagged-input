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
        defaultData={['Javascript', 'React', 'Typescript']}
        onInputChange={setSelected}
        onRemoveTag={handleTagRemove}
        onAddTag={handleTagAdd}
        onExisting={handleTagExist}
        style={{
          border: '2px solid gray',
          borderRadius: '5px',
          padding: '7px',
        }}
        
        inputStyle={{ color: 'dodgerblue' }}
        tagStyle={{}}
        tagRemoveButton={{ icon: 'minus', iconStyle: {}, buttonStyle: {} }}
        placeholder=""
        canDuplicate
        editOnRemove
        inputClass="input-class"
        containerClassName="container-class"
        autoFocus
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
