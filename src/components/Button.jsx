import React from 'react';
import iconSets from './Icons';

const Button = ({ iconType, iconName, label, onClick }) => {
  const icon = iconType && iconName ? iconSets[iconType][iconName] : null;

  return (
    <button onClick={onClick} className="btn btn-light d-flex align-items-center mb-4 custom-btn">
      {icon && <span className="me-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
