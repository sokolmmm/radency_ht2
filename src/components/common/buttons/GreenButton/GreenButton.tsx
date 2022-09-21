import React from 'react'
import styles from './GreenButton.module.scss'
import logo from '../../../../assets/images/arrow.png'

function GreenButton (): any {
  return (
    <button type="button" className={styles.greenButton}>
      <span>Create Note</span>
      <img src={logo} alt="arrow image" />
    </button>
  )
}

export default GreenButton
