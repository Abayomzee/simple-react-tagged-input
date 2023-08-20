## React simple tagged input

[![MIT](https://img.shields.io/npm/l/react-simple-tagged-input.svg?style=flat-square)](https://github.com/Abayomzee/simple-react-tagged-input/blob/main/LICENSE)
[![GitHub Actions Status](https://github.com/Abayomzee/simple-react-tagged-input/workflows/CI/badge.svg)](https://github.com/Abayomzee/simple-react-tagged-input/actions)
[![NPM](https://img.shields.io/npm/v/react-simple-tagged-input.svg)](https://npm.im/react-simple-tagged-input)

A light react component for tag(s) input

### 🔥 Features

- 🌴 Add multiple tags at a time
- 🖲️ Mouse and keyboard support
- 🗑️ Use Backspace to remove last tag
- 💅 Customizable
- 🔔 Notify when tag add or remove
- 🙌 Typescript support

### ⚒️ Installation

---

via npm

```bash
npm install react-simple-tagged-input
```

via yarn

```bash
yarn add react-simple-tagged-input
```

### 🚀 Demo

---

<img src='./tag-demo.gif' style='width: 600px'>

```tsx
import React, { useState } from 'react';
import ReactSimpleTaggedInput from 'react-simple-tagged-input';

const Demo = () => {
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
      <div className="">{JSON.stringify(selected)}</div>
      <br />
      <br />
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
        //
        // inputStyle={{ color: 'dodgerblue' }}
        // tagStyle={{}}
        // tagRemoveButton={{ icon: 'minus', iconStyle: {}, buttonStyle: {} }}
        // placeholder=""
        // canDuplicate
        // editOnRemove
        // inputClass="input-class"
        // containerClassName="container-class"
      />
    </div>
  );
};

export default Demo;
```
