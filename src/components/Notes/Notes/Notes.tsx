import React from 'react'
import GreenButton from '../../common/buttons/GreenButton/GreenButton'
import Tabs from '../../common/Tabs/Tabs'
import NotesTable from '../NotesTable/NotesTable'
import styles from './Notes.module.scss'

function Notes (): any {
  return (
    <section className={styles.notesTable}>
      <Tabs />
      <NotesTable />
      <GreenButton />
    </section>
  )
}

export default Notes
