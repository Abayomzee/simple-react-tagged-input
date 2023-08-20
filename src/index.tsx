import React from 'react';
import Tags from './components/Organisms/Tags/index';

interface Props {
  onInputChange?: any;
  defaultData?: any;
  autoFocus?: any;
}
export const TagInput: React.FC<Props> = props => {
  return <Tags {...props} />;
};
