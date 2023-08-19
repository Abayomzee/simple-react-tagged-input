import React, { useState, useRef } from 'react';
import { Wrapper } from './style';
import Tag from '../../Molecules/Tag/index';

interface TagRemoveButtonProps {
  icon?: 'times' | 'minus'; // Type of Icon to be shown in the remove button
  iconStyle?: object; // Object containing styles for the icon in the remove button e.g {color: 'red', fontSize: '30px'}
  buttonStyle?: object; // Object containing styles for the remove button e.g {backgroundColor: 'red', padding: '30px'}
}
interface Props {
  defaultData?: Array<string>; // Array of Preloaded Data e.g ['Javascript', 'React']
  placeholder?: string; // Input element placeholder
  canDuplicate?: boolean; // Enable multiple tag with the same name
  editOnRemove?: boolean; // Enable editing just removed tag

  inputStyle?: object; // Input element style => format == {color: 'red', backgroundColor: 'blue'}
  inputClass?: string; // Input element className
  containerStyle?: object; // Input element style => format == {color: 'red', backgroundColor: 'blue'}
  containerClassName?: string; // Input element className

  onInputChange?: (data: any) => void; // Function to update the tags list when a tag is added or removed
  onRemoveTag?: (tag?: string) => void; // Function to be triggered when a tag is removed
  onAddTag?: (tag?: string) => void; // Function to be triggered when a tag is removed
  onExisting?: (tag?: string) => void; // Function to be triggered when a tag already exist

  // Tag Props
  tagStyle?: object; // Object containing styles for the tag e.g {backgroundColor: 'red', padding: '30px'}
  tagRemoveButton?: TagRemoveButtonProps; // Check the tagRemoveButtonProps interface above
}
const Tags: React.FC<Props> = props => {
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // Props
  const {
    // Tags Props
    defaultData,
    placeholder,
    inputStyle,
    inputClass,
    containerStyle,
    containerClassName,
    canDuplicate,
    editOnRemove,
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
  const [data, setData] = useState<string[]>(
    defaultData || []
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
    <Wrapper
      style={containerStyle}
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
        {...otherProps}
      />
    </Wrapper>
  );
};

export default Tags;
