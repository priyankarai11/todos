import React from 'react';

const Checkbox = ({ onChange, defaultChecked }) => (
  <input type="checkbox" onChange={onChange} defaultChecked={defaultChecked} />
);

export default Checkbox;
