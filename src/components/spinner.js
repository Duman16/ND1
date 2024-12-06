import React from 'react';
import '../styles/styles.css';  // от компонентов в src/components
 // Импорт единого файла стилей

const Spinner = () => {
  return (
    <div className="spinner">
      <span>Loading...</span>
    </div>
  );
};

export default Spinner;
