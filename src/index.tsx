import React from 'react';
import Tags from './components/Organisms/Tags/index';

interface Props {
  placeholder?: string;
  dataType?: 'array' | 'object';
}
const ReactSimpleTaggedInput: React.FC<Props> = props => {
  // Data to render
  return <Tags {...props} />;
};
export default ReactSimpleTaggedInput;
