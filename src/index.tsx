import React from 'react';
import Tags from './components/Organisms/Tags/index';

interface Props {
  placeholder?: string;
  onInputChange?: (data: any) => void;
  onRemoveTag?: (tag?: string) => void;
  onAddTag?: (tag?: string) => void;
  defaultData?: any; // Preloaded Data
  canDuplicate?: boolean;
  autoFocus?: boolean;
}
const ReactSimpleTaggedInput: React.FC<Props> = props => {
  // Data to render
  return <Tags {...props} />;
};
export default ReactSimpleTaggedInput;
