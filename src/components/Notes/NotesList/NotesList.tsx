import React from 'react'
import IconButton from '../../common/buttons/IconButton/IconButton'
import styles from './NotesList.module.scss'

function NotesList (): any {
  return (
    <div className={styles.notesList}>
      <div className={styles.note}>
        <div className={styles.noteItem}>
            s
        </div>
        <div className={styles.noteItem}>
            2
        </div>
        <div className={styles.noteItem}>
            3
        </div>
        <div className={styles.noteItem}>
            4
        </div>
        <div className={styles.noteItem}>
            5
        </div>
        <div className={styles.noteItem}>
         <IconButton />
         <IconButton />
         <IconButton />
        </div>
      </div>
    </div>
  )
}

export default NotesList
