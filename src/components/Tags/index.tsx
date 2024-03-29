import React, { useState, useRef } from 'react';
import { Wrapper } from './style';
import Tag from '../Tag';
import { TagsProps } from '../../types';

const Tags: React.FC<TagsProps> = props => {
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // Props
  const {
    // Tags Props
    defaultData,
    placeholder,
    inputStyle,
    inputClass,
    style,
    containerClassName,
    canDuplicate,
    editOnRemove,
    autoFocus = true,
    onInputChange,
    onRemoveTag,
    onAddTag,
    onExisting,
    // Tag Props
    tagStyle,
    tagRemoveButton,

    // Other Unspecified props, majorly for the input field
    ...otherProps
  } = props;

  // States
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<string[]>(defaultData || []);

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
      delay(1000);
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
      delay(1000);
      onRemoveTag(tag);
    }
  };

  const handleRemoveLastTag = () => {
    if (!inputValue.length && data.length) {
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
    <Wrapper
      style={style}
      className={` ${containerClassName ? containerClassName : ''}`}
    >
      {!data.length
        ? null
        : data.map((t: any, index: any) => (
            <Tag
              key={index}
              text={t}
              id={index}
              handleRemoveTag={handleRemoveTag}
              tagStyle={tagStyle}
              tagRemoveButton={tagRemoveButton || {}}
            />
          ))}
      <input
        ref={inputRef}
        type="text"
        className={`tag-input ${inputClass || ''}`}
        value={inputValue}
        onKeyDown={handleKeyDownActions}
        onChange={handleInputChange}
        placeholder={placeholder || 'Type and press Enter'}
        style={inputStyle}
        autoFocus={autoFocus}
        {...otherProps}
      />
    </Wrapper>
  );
};

export default Tags;

// Utility functions

function delay(time: number) {
  setTimeout(() => {}, time);
}
