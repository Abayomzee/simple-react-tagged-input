import React from 'react';

interface Props {
  as: any;
  className?: string;
  text?: string;
  children?: any;
}

const Typography: React.FC<Props> = ({ as: As, className, text, children }) => {
  return <As className={className}>{text ? text : children}</As>;
};

export default Typography;
