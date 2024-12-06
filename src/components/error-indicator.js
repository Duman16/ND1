import React from 'react';
import '../styles/styles.css';  // от компонентов в src/components


const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span>Error loading data!</span>
    </div>
  );
};

export default ErrorIndicator;
