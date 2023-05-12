import React, { useState } from 'react';
import { CloseButton, Icon, Wrapper } from './style';
import Typography from '../../Atom/Typography/index';

interface Props {
  text: string;
  id: string | number;
  iconClass?: string;

  removeLabel?: 'times' | 'minus';
  removeLabelClass?: string;
  removeLabelColor?: string;
  removeLabelStyle?: any;

  bodyClass?: string;
  bgColor?: string;
  textClass?: string;
  removeBtnClass?: string;
  removeBtnStyle?: any;

  handleRemoveTag: (id: string | number) => void;
}
const Tag: React.FC<Props> = props => {
  // State
  const [remove, setRemove] = useState(false);

  // Props
  const {
    text,
    id,
    textClass,
    bodyClass,
    bgColor,

    removeLabel,
    removeLabelColor,
    removeLabelClass,
    removeBtnClass,
    removeBtnStyle,
    removeLabelStyle,

    handleRemoveTag,
  } = props;

  // Data to display
  return (
    <Wrapper
      className={`animate-in ${remove ? 'animate-out' : ''} ${
        bodyClass ? bodyClass : ''
      }`}
      bgColor={`${bgColor ? bgColor : ''}`}
    >
      <Typography
        as="span"
        className={`tag-name ${textClass ? textClass : ''}`}
        text={text}
      />
      <CloseButton
        className={`btn-close ${removeBtnClass ? removeBtnClass : ''}`}
        style={removeBtnStyle}
        onClick={() => {
          setRemove(true);
          setTimeout(() => {
            handleRemoveTag(id);
          }, 300);
        }}
      >
        <Icon
          className={removeLabelClass}
          color={removeLabelColor}
          style={removeLabelStyle}
        >
          {removeLabel === 'minus' ? <>{'\u002D'}</> : <>{'\u0078'}</>}
        </Icon>
      </CloseButton>
    </Wrapper>
  );
};

export default Tag;
