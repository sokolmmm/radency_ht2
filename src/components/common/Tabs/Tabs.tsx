import React from 'react'
import TabButton from '../buttons/TabButton/TabButton'
import styles from './Tabs.module.scss'

function Tabs (): any {
  return (
    <header className={styles.tabs}>
      <TabButton />
      <TabButton />
    </header>
  )
}

export default Tabs
