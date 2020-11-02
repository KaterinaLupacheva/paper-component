import React from 'react'
import styles from './styles.module.css'

export const Paper = ({ children, elevation }) => {
  const elStyle = elevation ? `elevation-${elevation}` : ''
  return <div className={`${styles.paper} ${styles[elStyle]}`}>{children}</div>
}
