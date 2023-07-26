import React from 'react';
import Tags from './components/Organisms/Tags/index';

interface Props {
  onInputChange?: any;
  defaultData?: any;
  autoFocus?: any;
}
const ReactSimpleTaggedInput: React.FC<Props> = props => {
  return <Tags {...props} />;
};
export default ReactSimpleTaggedInput;
