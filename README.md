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

<img src='./tag-demo.gif' style='width: 500px'>

```tsx
import React, { useState } from 'react';
import { TagInput } from 'react-simple-tagged-input';

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
  const handleTagExist = tag => {
    console.log(`${tag} already exit`);
  };

  // Data to display
  return (
    <div>
      <div className="">{JSON.stringify(selected)}</div>
      <br />
      <br />
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
        //
        // inputStyle={{ color: 'dodgerblue' }}
        // tagStyle={{}}
        // tagRemoveButton={{
        //   icon: 'minus',
        //   iconStyle: { color: 'white' },
        //   buttonStyle: { backgroundColor: 'tomato' },
        // }}
        // placeholder=""
        // canDuplicate={false}
        // editOnRemove={false}
        // inputClass="input-class"
        // containerClassName="container-class"
      />
    </div>
  );
};

export default Demo;
```

### 🍿 Props

---

| Prop                 | Description                            | Type     | Default              |
| -------------------- | -------------------------------------- | -------- | -------------------- |
| `defaultData`        | Array of preloaded Data                | array    | []                   |
| `placeholder`        | Placeholder for text input             | string   | Type and press Enter |
| `canDuplicate`       | Enable multiple tag with the same name | boolean  | false                |
| `editOnRemove`       | Enable tag editing when removed        | boolean  | false                |
| `autoFocus`          | autofocus for text input               | boolean  | true                 |
| `inputStyle`         | Style for text input                   | object   |                      |
| `inputClass`         | ClassName for text input               | string   |                      |
| `style`              | style for container                    | object   | {}                   |
| `containerClassName` | ClassName for container                | string   | ""                   |
| `onInputChange`      | Callback for onChange event            | function |                      |
| `onRemoveTag`        | Callback when a tag is removed         | function |                      |
| `onAddTag`           | Callback when a tag is added           | function |                      |
| `onExisting`         | Callback when a tag already exist      | function |                      |
| `tagStyle`           | style for tag                          | object   |                      |
| `tagRemoveButton`    | tag remove botton props                | object   |                      |
