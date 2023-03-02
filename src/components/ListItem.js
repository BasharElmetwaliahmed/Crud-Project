import React, { useState } from 'react'
import ControlBtns from './ControlBtns'
import EditForm from './EditForm';
import Styles from './ListItem.module.css'

function ListItem({title,id}) {
  const [editForm,setEditForm]=useState(false);

  return (
    <div className={Styles.item}>
       <h2>{title}</h2> 
      <ControlBtns id={id} setEditForm={setEditForm}></ControlBtns>
      {editForm && <EditForm  id={id} setEditForm={setEditForm}/> }
        
    </div>
  )
}

export default ListItem