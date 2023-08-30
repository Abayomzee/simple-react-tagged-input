export type TagRemoveButtonProps = {
  icon?: 'times' | 'minus';
  iconStyle?: object;
  buttonStyle?: object;
};
export type TagProps = {
  text: string;
  id: string | number;
  tagStyle?: object;
  tagRemoveButton: TagRemoveButtonProps;
  handleRemoveTag: (id: string | number) => void;
};
export type TagsProps = {
  defaultData?: Array<string>;
  placeholder?: string;
  canDuplicate?: boolean;
  editOnRemove?: boolean;
  autoFocus?: boolean;

  inputStyle?: object;
  inputClass?: string;
  style?: object;
  containerClassName?: string;

  onInputChange?: (data: any) => void;
  onRemoveTag?: (tag?: string) => void;
  onAddTag?: (tag?: string) => void;
  onExisting?: (tag?: string) => void;

  // Tag Props
  tagStyle?: object;
  tagRemoveButton?: TagRemoveButtonProps;
};
