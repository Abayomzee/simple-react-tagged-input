import React from 'react';
import Tags from './components/Tags';
import { TagsProps } from './types';

export const TagInput: React.FC<TagsProps> = props => {
  return <Tags {...props} />;
};
