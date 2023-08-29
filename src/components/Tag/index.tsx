import React, { useState } from 'react';
import { CloseButton, Icon, Wrapper } from './style';
import Typography from '../Typography';
import { TagProps } from './../../types';

const Tag: React.FC<TagProps> = props => {
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
