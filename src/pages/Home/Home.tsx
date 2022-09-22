import React from 'react';
import Notes from '../../components/Notes/Notes/Notes';
import styles from './Home.module.scss';

function Home(): any {
  return (
    <div className={styles.wrapper}>
      <Notes />
    </div>
  );
}

export default Home;
