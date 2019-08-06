import React from 'react';
import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';

const DeleteButton = ({ id, removeFunction }) => {
  return (
    <button value={id} onClick={() => { removeFunction(id) }} ><span><Icon icon={trashAlt} /></span></button>
  );
};

export default DeleteButton;