import React from 'react';

const ItemListBox = (props) => {
  console.log(props.grouping);
  return <div {...props}>{props.label}</div>
};

export default ItemListBox;