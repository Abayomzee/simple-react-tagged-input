import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TagInput } from '../src/index';
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

      <TagInput
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
        tagStyle={{ backgroundColor: 'dodgerblue', color: 'white' }}
        tagRemoveButton={{
          icon: 'minus' || 'minus',
          iconStyle: { color: 'white' },
          buttonStyle: { backgroundColor: 'tomato' },
        }}
        placeholder=""
        canDuplicate={true}
        editOnRemove={false}
        inputClass="input-class"
        containerClassName="container-class"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
