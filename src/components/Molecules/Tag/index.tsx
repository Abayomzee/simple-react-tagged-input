import React, { useState } from 'react';
import { CloseButton, Icon, Wrapper } from './style';
import Typography from '../../Atom/Typography/index';

interface TagRemoveButtonProps {
  icon?: 'times' | 'minus'; // Type of Icon to be shown in the remove button
  iconStyle?: object; // Object containing styles for the icon in the remove button e.g {color: 'red', fontSize: '30px'}
  buttonStyle?: object; // Object containing styles for the remove button e.g {backgroundColor: 'red', padding: '30px'}
}
interface Props {
  text: string; //Tag text
  id: string | number; // Tag Id
  tagStyle?: object; // Object containing styles for the tag e.g {backgroundColor: 'red', padding: '30px'}
  tagRemoveButton: TagRemoveButtonProps; // Check the tagRemoveButtonProps interface above
  handleRemoveTag: (id: string | number) => void; // Function to be triggered when a tag is removed
}
const Tag: React.FC<Props> = props => {
  // State
  const [remove, setRemove] = useState(false);

  // Props
  const { text, id, tagStyle, tagRemoveButton, handleRemoveTag } = props;

  // Remove Button object properties
  const { icon, buttonStyle, iconStyle } = tagRemoveButton;

  // Data to display
  return (
    <Wrapper
      className={`animate-in ${remove ? 'animate-out' : ''}`}
      style={tagStyle}
    >
      <Typography as="span" text={text} />
      <CloseButton
        className={`btn-close`}
        style={buttonStyle}
        onClick={() => {
          setRemove(true);
          setTimeout(() => {
            handleRemoveTag(id);
          }, 250);
        }}
      >
        <Icon style={iconStyle}>
          {icon === 'minus' ? <>{'\u002D'}</> : <>{'\u0078'}</>}
        </Icon>
      </CloseButton>
    </Wrapper>
  );
};

export default Tag;
