import React, { useState } from 'react'

import { AddCategory, GifGrid } from './components'

// import { AddCategory } from './components/AddCategory'
// import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;

    // console.log(newCategory)

    setCategories([ newCategory, ...categories])
    // setCategories(['newCategory', ...categories]) // para adicionar al principio en vez de el final
    // setCategories( cat => [...cat,'newCategory'])
  }

  // console.log(categories)
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
      //  setCategories={ setCategories }
        onNewCategory={ value => onAddCategory(value)}
       />
      
        { 
          categories.map( category => (
          <GifGrid 
            key={ category } 
            category={ category } />
        )) 
        }
      
    </>
  )
}
