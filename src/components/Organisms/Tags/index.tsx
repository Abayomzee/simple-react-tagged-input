import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import Tag from '../../Molecules/Tag/index';

interface Props {
  defaultData?: Array<any>;
  placeholder?: string;
  autoFocus?: boolean;
  dataType?: 'array' | 'object';

  inputStyle?: any;
}
const Tags: React.FC<Props> = props => {
  // States
  const [inputValue, setInputValue] = useState('');
  const [data, setData] =
    props.dataType === 'array' ? useState<any>([]) : useState<any>([]);
  // const [dataObj, setDataObj] = useState<any>([]);

  // Props
  const {
    defaultData = ['JavaScript', 'React'],
    placeholder,
    inputStyle,
  } = props;

  //   Methods
  const handleInputChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    const trimmedValue = value.trim() === '' ? '' : value;
    setInputValue(trimmedValue);
  };

  const handleAddTag = () => {
    if (inputValue.length > 0) {
      setData((data: any) => [...data, inputValue]);
    } else return;
    setInputValue('');
  };

  const handleRemoveTag = (id: any) => {
    let newTags = data;
    newTags.splice(id, 1);
    setData([...newTags]);
  };

  // Effects
  useEffect(() => {
    if (defaultData!.length) {
      setData(defaultData);
    }
  }, []);

  // Data to display
  return (
    <Wrapper>
      {!data.length
        ? null
        : data.map((t: any, index: any) => <Tag key={index} text={t} />)}
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
