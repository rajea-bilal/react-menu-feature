import React from 'react'
import Title from './Title'
import data from '../data'
import Menu from './Menu'
import Category from './Category'
import Footer from './Footer'


const App = () => {

  const [ menu, setMenu ] = React.useState(data)
  const [ category, setCategory ] = React.useState()
  
  const handleCategory = (cat) => {
    console.log(cat)
  
    if(cat === 'all') {
      setMenu(data)
    } else {
      const filteredMenu = data.filter((item) => item.category === cat)
      setMenu(filteredMenu)
    }
  }

  return (
    <>
    <Title />
    <Category handleCategory={handleCategory} />
    <main>
      <Menu menu={menu} />
    </main>
    <Footer />
    </>
  );
};
export default App;
