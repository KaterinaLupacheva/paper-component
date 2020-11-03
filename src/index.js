import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

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

Paper.propTypes = {
  elevation: PropTypes.oneOf([...new Array(24)].map((_, i) => i + 1).concat([''])),
  outlined: PropTypes.bool,
  square: PropTypes.bool,
  customClass: PropTypes.string
};
