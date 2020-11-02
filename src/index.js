import React from 'react'
import styles from './styles.module.css'

export const Paper = ({ children, elevation, outlined, customClass }) => {
  const elevationStyles = elevation ? `elevation-${elevation}` : ''
  const outlinedStyles = outlined ? 'outlined' : ''
  const customStyles = customStyles ? `${customStyles}` : ''
  return (
    <div
      className={`${styles['paper']} ${styles[elevationStyles]} ${styles[outlinedStyles]} ${customStyles}`}
    >
      {children}
    </div>
  )
}
