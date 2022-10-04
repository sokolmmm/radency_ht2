import React, { useState } from 'react';

import archiveImg from '../../../assets/images/archive.png';
import deleteImg from '../../../assets/images/delete.png';
import editImg from '../../../assets/images/edit.png';
import closeImg from '../../../assets/images/close.png';

export enum EnumIconButton {
  DELETE = 'delete',
  ARCHIVE = 'archive',
  EDIT = 'edit',
  CLOSE = 'close',
}

interface IIconButton {
  icon: EnumIconButton;
  onButtonClick: () => void;
}

function IconButton({ icon, onButtonClick }: IIconButton): JSX.Element {
  const [iconImg, setIconImg] = useState(archiveImg);

  React.useEffect(() => {
    if (icon === EnumIconButton.ARCHIVE) {
      setIconImg(archiveImg);
    } else if (icon === EnumIconButton.DELETE) {
      setIconImg(deleteImg);
    } else if (icon === EnumIconButton.EDIT) {
      setIconImg(editImg);
    } else if (icon === EnumIconButton.CLOSE) {
      setIconImg(closeImg);
    }
  }, [icon]);

  return (
    <button
      className="outline-0 w-5 h-5 transition-all hover:translate-x-1 t active:translate-x-0"
      type="button"
      onClick={onButtonClick}
    >
      <img src={iconImg} alt="Archive task button" className="w-5 h-5 pointer-events-none" />
    </button>
  );
}

export default IconButton;
