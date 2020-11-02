import React from 'react';
import styles from './styles.module.css';

export const Paper = ({
  children,
  elevation,
  outlined,
  square,
  customClass
}) => {
  const elevationStyles = elevation ? `elevation-${elevation}` : '';
  const outlinedStyles = outlined ? 'outlined' : '';
  const basicStyles = square ? 'square' : 'round';
  const customStyles = customClass ? `${customClass}` : '';
  return (
    <div
      className={`${styles[basicStyles]} ${styles[elevationStyles]} ${styles[outlinedStyles]} ${customStyles}`}
    >
      {children}
    </div>
  );
};
