import React from 'react';
import { CloseButton, Icon, Wrapper } from './style';
import Typography from '../../Atom/Typography/index';

interface Props {
  text: string;
  iconClass?: string;

  removeLabel?: 'times' | 'minus';
  removeLabelClass?: string;
  removeLabelColor?: string;
  removeLabelStyle: any;

  bodyClass?: string;
  bgColor?: string;
  textClass?: string;
  removeBtnClass?: string;
  removeBtnStyle: any;
}
const Tag: React.FC<Props> = props => {
  // Props
  const {
    text,
    bodyClass,
    textClass,
    removeBtnClass,
    removeLabel,
    removeLabelColor,
    removeLabelStyle,
    removeLabelClass,
    bgColor,
    removeBtnStyle,
  } = props;

  // Data to display
  return (
    <Wrapper className={`${bodyClass}`} bgColor={bgColor}>
      <Typography as="span" className={`tag-name ${textClass}`} text={text} />
      <CloseButton
        className={`btn-close ${removeBtnClass}`}
        style={removeBtnStyle}
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
