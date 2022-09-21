import React from 'react'
import NotesList from '../NotesList/NotesList'
import NotesTableHeader from '../NotesTableHeader/NotesTableHeader'
import styles from './NotesTable.module.scss'

function NotesTable (): any {
  return (
    <div className={styles.notesTable}>
        <NotesTableHeader />
        <NotesList />
    </div>
  )
}

export default NotesTable
