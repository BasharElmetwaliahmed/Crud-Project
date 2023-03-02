import React,{createContext, ReactDOM, useEffect, useReducer, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Alert from './components/Alert';

import List from './components/List';
export const ListContext=createContext()
const initState={kind:null ,isShown:false}
const reducer=(state,action)=>{
   if(action.type==='success'){
    return {kind:'success',isShown:true,msg:action.msg}
   }
   else if(action.type==='warning'){
    return {kind:'warning',isShown:true,msg:action.msg}
   }
   else if(action.type==='edited'){
   return {kind:'edited',isShown:true,msg:action.msg}

   }
   else{
    return initState
   }

}
const getItems=()=>{
  const list=localStorage.getItem('list');
  if(list){
    return JSON.parse(list)
  }
  else{
  return []
}
}
function App() {
  const [listItems,setListItems]=useState(getItems());
  const [alert,alertDispatch]=useReducer(reducer,initState);
   useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(listItems))
   },[listItems])


  return (
    <div className="App container">
      {alert.isShown && <Alert alert={alert} alertDispatch={alertDispatch}></Alert>}
      <h1>Crud App</h1>
    <ListContext.Provider value={{listItems,setListItems,alertDispatch}}>
            <Form addItemHandler={setListItems} alertDispatch={alertDispatch}></Form>
      <List listItems={listItems}></List>
      
    </ListContext.Provider>

    </div>
  );
}

export default App;
