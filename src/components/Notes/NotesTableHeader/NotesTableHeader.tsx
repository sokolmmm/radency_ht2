import React from 'react'
import IconButton from '../../common/buttons/IconButton/IconButton'
import styles from './NotesTableHeader.module.scss'

function NotesTableHeader (): any {
  return (
    <header className={styles.notesTableHeader}>
      <div className={styles.headerItem}>
        <span>Name</span>
      </div>
      <div className={styles.headerItem}>
        <span>Created</span>
      </div>
      <div className={styles.headerItem}>
        <span>Category</span>
      </div>
      <div className={styles.headerItem}>
        <span>Content</span>
      </div>
      <div className={styles.headerItem}>
        <span>Dates</span>
      </div>
      <div className={styles.headerItem}>
        <IconButton />
        <IconButton />
      </div>
    </header>
  )
}

export default NotesTableHeader
