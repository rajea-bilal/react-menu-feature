import React from 'react';
import MenuItem from '../MenuItem'

function Menu({ menu }) {

  return (
    <>
      {menu.map((item) => {
        return <MenuItem item={item} />
      })}
    </>
  );
}

export default Menu;
