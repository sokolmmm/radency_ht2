import React from 'react';

import HeaderElement from '../HeaderElement';
import styles from './AdaptiveHeader.module.scss';

interface IAdaptiveHeader {
  headerItems: string[];
}
function AdaptiveHeader({ headerItems }: IAdaptiveHeader): JSX.Element {
  return (
    <div className={styles.adaptiveCategoryHeader}>
      {headerItems.map((el) => (
        <HeaderElement title={el} key={el} />
      ))}
    </div>
  );
}

export default AdaptiveHeader;
