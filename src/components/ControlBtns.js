import React, { useContext } from 'react'
import Styles from './ControlBtns.module.css'
import { ListContext } from '../App'
function ControlBtns({id,setEditForm}) {
  const {listItems,setListItems,alertDispatch}=useContext(ListContext);
  const deleteHandler=()=>{
    let filteredItems=listItems.filter(item=>item.id!==id);
    setListItems(filteredItems)
           alertDispatch({type:'success',msg:"the item has been Deleted"})

  }
  return (

           <div className={Styles['btns-container']}>
        <button className={`${Styles.btn} ${Styles['edit-btn']}` } onClick={()=>{setEditForm(true)}}>Edit</button>
        <button  className={`${Styles.btn} ${Styles['del-btn']}`} onClick={deleteHandler} >Delete</button>
       </div>
  )

}

export default ControlBtns