import React, { useEffect, useState } from 'react';
import Tag from 'components/Molecules/Tag';
import { Wrapper } from './style';

interface Props {
  defaultData?: Array<any>;
  placeHolder?: string;
}
const Tags: React.FC<Props> = props => {
  // States
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<any>([]);

  // Props
  const { defaultData, placeHolder } = props;

  //   Methods
  const handleInputChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    const isEmptyValue = !!value.trim();
    if (isEmptyValue) return;
    setInputValue(value);
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
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeHolder || 'Type and press Enter'}
      />
    </Wrapper>
  );
};

export default Tags;
