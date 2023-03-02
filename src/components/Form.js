import React,{useRef} from 'react'
import Styles from './Form.module.css'


const Form=({addItemHandler,alertDispatch})=> {
  const inputRef=useRef();
  
    const SubmitHandler=(e)=>{
      e.preventDefault();
      const valueAdded=inputRef.current.value
      if(valueAdded !==''){
        const newItem={
          title:valueAdded,
          id:(Math.random()).toString()
        }
        console.log(newItem)
        addItemHandler(state=>{
          return [...state,newItem]
        })
       alertDispatch({type:'success',msg:"the item has been Added"})
        inputRef.current.value="";
      }
      else if(valueAdded.trim()===""){
               alertDispatch({type:'warning', msg:"input is empty"})

      }

    }
  return (
    <form className={Styles.form} onSubmit={SubmitHandler}>
        <input type='text' ref={inputRef}  placeholder='enter value' className={Styles.input} />
        <button>Submit</button>
    </form>
  )
}

export default Form