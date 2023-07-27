import React, { useState } from 'react';
import { CloseButton, Icon, Wrapper } from './style';
import Typography from '../../Atom/Typography/index';

interface tagRemoveButtonProps {
  icon?: 'times' | 'minus';
  iconStyle?: object;
  buttonStyle?: object;
}
interface Props {
  text: string;
  id: string | number;
  iconClass?: string;

  removeLabel?: 'times' | 'minus';
  removeLabelClass?: string;
  removeLabelColor?: string;
  removeLabelStyle?: any;

  tagStyle?: object;

  removeBtnStyle?: any;

  tagRemoveButton: tagRemoveButtonProps;

  handleRemoveTag: (id: string | number) => void;
}
const Tag: React.FC<Props> = props => {
  // State
  const [remove, setRemove] = useState(false);

  // Props
  const {
    text,
    id,
    tagStyle,

    tagRemoveButton,
    handleRemoveTag,
  } = props;

  // Remove Button object
  console.log({ tagRemoveButton });
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
