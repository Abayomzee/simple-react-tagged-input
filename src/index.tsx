import React from 'react';
import Tags from './components/Organisms/Tags/index';

interface Props {}
const ReactSimpleTaggedInput: React.FC<Props> = props => {
  return <Tags {...props} />;
};
export default ReactSimpleTaggedInput;
