import Typography from 'components/Atom/Typography';
import React from 'react';
import { CloseButton, Icon, Wrapper } from './style';

interface Props {
  text: string;
  removeLabel?: 'times' | 'minus';
  iconClass?: string;
  removeLabelClass?: string;
  removeLabelColor?: string;

  bodyClass?: string;
  bgColor?: string;
  textClass?: string;
  removeBtnClass?: string;
}
const Tag: React.FC<Props> = props => {
  // Props
  const {
    text,
    bodyClass,
    textClass,
    removeBtnClass,
    removeLabel,
    removeLabelClass,
    removeLabelColor,
    bgColor,
  } = props;

  // Data to display
  return (
    <Wrapper className={`${bodyClass}`} bgColor={bgColor}>
      <Typography as="span" className={`${textClass}`} text={text} />
      <CloseButton className={`btn-close ${removeBtnClass}`}>
        <Icon className={removeLabelClass} color={removeLabelColor}>
          {removeLabel === 'minus' ? '&#x2D' : '&#x274C'}
        </Icon>
      </CloseButton>
    </Wrapper>
  );
};

export default Tag;
