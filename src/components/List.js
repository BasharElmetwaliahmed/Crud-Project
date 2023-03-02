import React from 'react'
import ListItem from './ListItem'
import Styles from './List.module.css'

function List({listItems}) {
  return (
    <div className={Styles['list-container']}>
      {listItems.map(item=><ListItem title={item.title} key={item.id} id={item.id}/>)

      }
    </div>
  )
}

export default List