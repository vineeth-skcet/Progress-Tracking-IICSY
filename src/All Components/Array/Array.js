import React from 'react'
import ItemList from './ItemList'
const Array = () => {
    const itemArray = ['Item1' ,'Item2' ,'Item3'];
  return (
    <div>
        <h1>Item List Example</h1>
        <ItemList items={itemArray}/>
    </div>
  )
}

export default Array