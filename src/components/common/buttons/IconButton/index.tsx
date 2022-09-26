import React, { useState } from 'react';

import styles from './IconButton.module.scss';
import archiveImg from '../../../../assets/images/archive.png';
import deleteImg from '../../../../assets/images/delete.png';
import editImg from '../../../../assets/images/edit.png';
import closeImg from '../../../../assets/images/close.png';

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
    <button type="button" className={styles.iconButton} onClick={onButtonClick}>
      <img src={iconImg} alt="Archive task button" />
    </button>
  );
}

export default IconButton;
