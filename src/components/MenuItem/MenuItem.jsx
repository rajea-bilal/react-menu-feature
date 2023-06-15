import React from 'react';

// In the MenuItem component, render an image element, a title, a price, and a description. You can use the data from the menu items array to fill in the information for each component.

function MenuItem({ item }) {
  const { id, title, category, price, img, desc } = item

  return (
    <>
    <article className="menu-item">
        <header>
          <img src={ img } alt={title}/>
        </header>

        <section className="menu-text">
          <div className="menu-title">
            <h4>{title}</h4>
            <span>{price}</span>
          </div>

          <p>{desc}</p>
        </section>
    </article>
  </>
);
}

  

export default MenuItem;
