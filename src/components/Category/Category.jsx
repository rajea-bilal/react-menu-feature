import React from 'react';
import Button from '../Button'

function Category({ handleCategory }) {
  return (
    <>
    <section className="btn-container">
    <Button handleCategory={handleCategory}>all</Button>
    <Button handleCategory={handleCategory}>breakfast</Button>
    <Button handleCategory={handleCategory}>lunch</Button>
    <Button handleCategory={handleCategory}>shakes</Button>

    </section>
    </>
  );
}

export default Category;
