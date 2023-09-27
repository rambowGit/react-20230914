import React from 'react';

export function Button({ title, onClick, disabled }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
}
