import React from 'react';

const Button = (props) => {
  const { label } = props;
  return <button type="button">{label}</button>;
};
export default Button;
