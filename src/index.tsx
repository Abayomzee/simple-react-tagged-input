import React from 'react';
import Tags from './components/Organisms/Tags/index';

interface TagRemoveButtonProps {
  icon?: 'times' | 'minus'; // Type of Icon to be shown in the remove button
  iconStyle?: object; // Object containing styles for the icon in the remove button e.g {color: 'red', fontSize: '30px'}
  buttonStyle?: object; // Object containing styles for the remove button e.g {backgroundColor: 'red', padding: '30px'}
}
interface Props {
  defaultData?: Array<string>; // Array of Preloaded Data e.g ['Javascript', 'React']
  placeholder?: string; // Input element placeholder
  canDuplicate?: boolean; // Enable multiple tag with the same name
  editOnRemove?: boolean; // Enable editing just removed tag
  autoFocus?: boolean;

  inputStyle?: object; // Input element style => format == {color: 'red', backgroundColor: 'blue'}
  inputClass?: string; // Input element className
  style?: object; // Input element style => format == {color: 'red', backgroundColor: 'blue'}
  containerClassName?: string; // Input element className

  onInputChange?: (data: any) => void; // Function to update the tags list when a tag is added or removed
  onRemoveTag?: (tag?: string) => void; // Function to be triggered when a tag is removed
  onAddTag?: (tag?: string) => void; // Function to be triggered when a tag is removed
  onExisting?: (tag?: string) => void; // Function to be triggered when a tag already exist

  // Tag Props
  tagStyle?: object; // Object containing styles for the tag e.g {backgroundColor: 'red', padding: '30px'}
  tagRemoveButton?: TagRemoveButtonProps; // Check the tagRemoveButtonProps interface above
}
export const TagInput: React.FC<Props> = props => {
  return <Tags {...props} />;
};
