import React from 'react';

function Button({ children, handleCategory }) {
  return (
    <button className="btn category-btn" onClick={() => handleCategory(children)}>
      {children}
    </button>
  )

}

export default Button;
