import React from 'react';
import Notes from '../../components/notes/Notes';
import SummaryTable from '../../components/summaryTable/SummaryTable';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Notes />
      <SummaryTable />
    </div>
  );
}

export default Home;
