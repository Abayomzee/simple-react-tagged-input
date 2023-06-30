import React, { useState, useRef } from 'react';
import { Wrapper } from './style';
import Tag from '../../Molecules/Tag/index';

interface Props {
  defaultData?: Array<string>; // Preloaded Data
  // value?: Array<string>; // Tags value Data
  placeholder?: string; // Input tag placeholder
  autoFocus?: boolean; // Input fiield auto focus
  canDuplicate?: boolean; // Having multiple tag with the same name
  editOnRemove?: boolean; // Edit just removed tag

  inputStyle?: any; // Input field style => format == {color: 'red', backgroundColor: 'blue'}
  onInputChange?: (data: any) => void;
  onRemoveTag?: (tag?: string) => void;
  onAddTag?: (tag?: string) => void;
  onExisting?: (tag?: string) => void;
}
const Tags: React.FC<Props> = props => {
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // Props
  const {
    defaultData,
    placeholder,
    inputStyle,
    canDuplicate,
    editOnRemove,
    onInputChange,
    onRemoveTag,
    onAddTag,
    onExisting,
    ...otherProps
  } = props;

  // States
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<string[]>(
    defaultData || ['🍑 Orange', '🥭 Mango', '🍅 Tomato', '🍒 Cherry', '🌹 Flower']
  );

  //   Methods
  const handleInputChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    const trimmedValue = value.trim() === '' ? '' : value;

    setInputValue(trimmedValue);
  };

  const handleAddTag = () => {
    let value = inputValue;
    if (inputValue.length > 0) {
      // Handle multiple additions
      const multipleTags: any = inputValue.split(',');
      const isMultiple = multipleTags.length > 1 ? true : false;

      // Check if tag exist
      if (!isMultiple && data.includes(value) && !canDuplicate) {
        if (onExisting) {
          onExisting(value);
        }
        return;
      }

      if (isMultiple) {
        const uniqueData: any = [...new Set([...data, ...multipleTags])];
        setData(uniqueData);
        onInputChange!([...data, value]);
      } else {
        setData((data: any) => [...data, value]);
        onInputChange!([...data, value]);
      }
    } else return;

    setInputValue('');

    if (onAddTag) {
      onAddTag(value);
    }
  };

  const handleRemoveTag = (id: any) => {
    let tags = [...data];
    let tag = tags[id];
    tags.splice(id, 1);
    setData([...tags]);
    onInputChange!([...tags]);
    inputRef!.current!.focus();

    if (editOnRemove) {
      setInputValue(tag);
    }

    if (onRemoveTag) {
      // Execute onRemoveTag
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
        onKeyDown={handleKeyDownActions}
        onChange={handleInputChange}
        placeholder={placeholder || 'Type and press Enter or Comma'}
        style={inputStyle || {}}
        {...otherProps}
      />
    </Wrapper>
  );
};

export default Tags;
