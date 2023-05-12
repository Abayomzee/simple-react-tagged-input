import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import Tag from '../../Molecules/Tag/index';

interface Props {
  defaultData?: Array<any>; // Preloaded Data
  placeholder?: string; // Input tag placeholder
  autoFocus?: boolean; // Input fiield auto focus
  dataType?: 'array' | 'object'; // Type of outputted data, either Array<string> or Array<object>

  inputStyle?: any; // Input field style => format == {color: 'red', backgroundColor: 'blue'}
  setData?: (data: Array<any>) => void;
}
const Tags: React.FC<Props> = props => {
  // States
  const [inputValue, setInputValue] = useState('');
  const [data, setTagData] = useState<any>([]);

  // Props
  const {
    defaultData = [
      { id: '1', text: 'JavaScript' },
      { id: '2', text: 'React' },
      { id: 'Abayo', text: 'Abayomi' },
      { id: 'Ajadi', text: 'Ajadi' },
      { id: 'Okegb', text: 'Okegbenro' },
      { id: 'Olasu', text: 'Olasunkanmi' },
      { id: 'Danie', text: 'Daniel' },
    ],
    placeholder,
    inputStyle,
    dataType = 'array',
    setData,
  } = props;

  //   Methods
  const handleInputChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    const trimmedValue = value.trim() === '' ? '' : value;
    setInputValue(trimmedValue);
  };

  const handleDataUpdate = () => {
    if (dataType === 'object') {
      setData!([...data]);
    } else {
      const newData = data.map((d: any) => d.text);
      setData!([...newData]);
    }
  };

  const handleAddTag = () => {
    if (inputValue.length > 0) {
      setTagData((data: any) => [
        ...data,
        { id: Date.now(), text: inputValue },
      ]);
      handleDataUpdate();
    } else return;
    setInputValue('');
  };

  const handleRemoveTag = (id: any) => {
    let tags = [...data];
    const index = tags.findIndex(tag => tag.id === id);
    tags.splice(index, 1);
    setTagData([...tags]);
    handleDataUpdate();
  };

  // Effects
  useEffect(() => {
    if (defaultData!.length) {
      setTagData(defaultData);
    }
  }, []);

  // Data to display
  return (
    <Wrapper>
      {!data.length
        ? null
        : data.map((t: any) => (
            <Tag
              key={t.id}
              text={t.text}
              id={t.id}
              handleRemoveTag={() => handleRemoveTag(t.id)}
            />
          ))}
      <input
        type="text"
        className="tag-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={e => e.key === 'Enter' && handleAddTag()}
        placeholder={placeholder || 'Type and press Enter'}
        style={inputStyle || {}}
        {...props}
      />
    </Wrapper>
  );
};

export default Tags;
