import React, { useEffect } from 'react'
import Styles from './Alert.module.css'
const Alert=({alert,alertDispatch})=> {
  useEffect(()=>{
    const setAlertTime=setTimeout(()=>{
      alertDispatch({type:'no'})
      
    }
      ,2000)
      return ()=>{
        clearTimeout(setAlertTime)
      }
  },[alert])
  return (
    <div className={`${Styles.alert} ${Styles[alert.kind]}`}>
        <h2>{alert.msg}</h2>
    </div>
  )
}

export default Alert