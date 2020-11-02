import React from 'react'
import styles from './styles.module.css'

export const Paper = ({ children, elevation, outlined }) => {
  const elevationStyles = elevation ? `elevation-${elevation}` : '';
  const outlinedStyles = outlined ? 'outlined' : '';
  return <div className={`${styles.paper} ${styles[elevationStyles]} ${styles[outlinedStyles]}`}>{children}</div>
}
