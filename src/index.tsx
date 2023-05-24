import React from 'react';
import Tags from './components/Organisms/Tags/index';

interface Props {
  placeholder?: string;
  onInputChange?: (data: Array<any>) => void;
  onRemoveTag?: (tag?: string) => void;
  defaultData?: Array<string>; // Preloaded Data
  canDuplicate?: boolean;
}
const ReactSimpleTaggedInput: React.FC<Props> = props => {
  // Data to render
  return <Tags {...props} />;
};
export default ReactSimpleTaggedInput;
