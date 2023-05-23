import React, { useState, useRef } from 'react';
import { Wrapper } from './style';
import Tag from '../../Molecules/Tag/index';

interface Props {
  defaultData?: Array<string>; // Preloaded Data
  // value?: Array<string>; // Tags value Data
  placeholder?: string; // Input tag placeholder
  autoFocus?: boolean; // Input fiield auto focus

  inputStyle?: any; // Input field style => format == {color: 'red', backgroundColor: 'blue'}
  onInputChange?: (data: Array<String>) => void;
  onRemoveTag?: (tag?: string) => void;
}
const Tags: React.FC<Props> = props => {
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // Props
  const {
    defaultData,
    placeholder,
    inputStyle,
    onInputChange,
    onRemoveTag,
  } = props;

  // States
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<string[]>(
    defaultData || ['JavaScript', 'React']
  );

  //   Methods
  const handleInputChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    const trimmedValue = value.trim() === '' ? '' : value;

    setInputValue(trimmedValue);
  };

  const handleAddTag = () => {
    if (inputValue.length > 0) {
      setData((data: any) => [...data, inputValue]);
      onInputChange!([...data, inputValue]);
    } else return;

    setInputValue('');
  };

  const handleRemoveTag = (id: any) => {
    let tags = [...data];
    let tag = tags[id];
    tags.splice(id, 1);
    setData([...tags]);
    onInputChange!([...tags]);
    inputRef!.current!.focus();

    // Execute onRemoveTag
    if (onRemoveTag) {
      onRemoveTag(tag);
    }
  };

  const handleRemoveLastTag = () => {
    if (!inputValue.length) {
      let tags = [...data];
      let tag = tags.at(-1);
      tags.pop();
      setData([...tags]);
      onInputChange!([...tags]);

      // Execute onRemoveTag
      if (onRemoveTag) {
        onRemoveTag(tag);
      }
    }
  };

  const handleKeyDownActions = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') handleAddTag();
    if (e.key === 'Backspace') handleRemoveLastTag();
  };

  // Data to display
  return (
    <Wrapper>
      {!data.length
        ? null
        : data.map((t: any, index: any) => (
            <Tag
              key={index}
              text={t}
              id={index}
              handleRemoveTag={handleRemoveTag}
            />
          ))}
      <input
        ref={inputRef}
        type="text"
        className="tag-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDownActions}
        placeholder={placeholder || 'Type and press Enter or Comma'}
        style={inputStyle || {}}
        {...props}
      />
    </Wrapper>
  );
};

export default Tags;
