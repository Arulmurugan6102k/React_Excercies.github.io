import React from 'react';
import styles from './MyStyles.module.css';

const CssModule = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, CSS Modules!</h1>
    </div>
  );
};

export default CssModule;
