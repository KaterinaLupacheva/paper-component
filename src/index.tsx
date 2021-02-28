import * as React from 'react';
import * as PropTypes from 'prop-types';
const styles = require('./styles.module.css');

export type PaperProps = {
  children?: React.ReactNode;
  elevation?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
  outlined?: boolean;
  square?: boolean;
  customClass?: string;
};

const Paper = ({
  children,
  elevation,
  outlined,
  square,
  customClass
}: PaperProps): JSX.Element => {
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
  elevation: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    ''
  ]),
  outlined: PropTypes.bool,
  square: PropTypes.bool,
  customClass: PropTypes.string
};

export default Paper;
