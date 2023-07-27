import React, { useState } from 'react';
// import { CloseButton, Icon, Wrapper } from './style';
import Typography from '../../Atom/Typography/index';
import './style.css';

interface tagRemoveButtonProps {
  icon?: 'times' | 'minus'; // Type of Icon to be shown in the remove button
  iconStyle?: object; // Object containing styles for the icon in the remove button e.g {color: 'red', fontSize: '30px'}
  buttonStyle?: object; // Object containing styles for the remove button e.g {backgroundColor: 'red', padding: '30px'}
}
interface Props {
  text: string; //Tag text
  id: string | number; // Tag Id
  tagStyle?: object; // Object containing styles for the tag e.g {backgroundColor: 'red', padding: '30px'}
  tagRemoveButton: tagRemoveButtonProps; // Check the tagRemoveButtonProps interface above
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
    <div
      className={`wrapper animate-in ${remove ? 'animate-out' : ''}`}
      style={tagStyle}
    >
      <Typography as="span" text={text} />
      <button
        className={`close-button btn-close`}
        style={buttonStyle}
        onClick={() => {
          setRemove(true);
          setTimeout(() => {
            handleRemoveTag(id);
          }, 250);
        }}
      >
        <span className="icon" style={iconStyle}>
          {icon === 'minus' ? <>{'\u002D'}</> : <>{'\u0078'}</>}
        </span>
      </button>
    </div>
  );
};

export default Tag;
