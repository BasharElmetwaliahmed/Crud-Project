import React, { useState,useContext } from 'react'
import { ListContext } from '../App';
import Styles from './FormEdit.module.css'
function EditForm({id,setEditForm}) {
    const [editValue,setEditValue]=useState("");
    const {listItems,setListItems,alertDispatch}=useContext(ListContext);

 const editFormHandler=(e)=>{
    e.preventDefault()
    if(editValue!==""){
        const existingItem=listItems.find(item=>item.id==id);
        existingItem.title=editValue;
        const newList=[];
        for(let i=0;i<listItems.length;i++){
            if(existingItem.id==listItems[i].id){
                newList.push(existingItem)
               
            }
            else{
                newList.push(listItems[i])
            }
            
        }
               alertDispatch({type:'edited',msg:"the item has been Edited"})
               setEditForm(false);

    setListItems(newList)
    }
   else if(editValue.trim()===""){

                   alertDispatch({type:'warning', msg:"input is empty"})

  }}
  const onChangeEditValue=(e)=>{
    setEditValue(e.target.value)
  }
  return (
    <form className={Styles['form-edit']}>
        <input type="text" value={editValue}  onChange={onChangeEditValue}/>
        <button onClick={editFormHandler}>Edit</button>
    </form>
  )
}

export default EditForm