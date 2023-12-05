import React from 'react'
import PropType from 'prop-types';
const ItemList = ({items}) => {
  return (
    <ul>
        {items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
  )
}

ItemList.PropType={
    items: PropType.arrayOf(PropType.string).isRequired,
}
export default ItemList