import React from 'react'
import { useState } from 'react'
import {Navigate} from 'react-router-dom'

// 路由组件放在pages中
export default function About() {
  const [sum,setSum]= useState(0)
  const handleClick=()=>{
    setSum(sum+1)
  }
  return (
    <div>
      <h3>我是About的内容</h3>
      {sum ===2? <Navigate to='/home'/>:<h4>当前sum值是:{sum}</h4>}
      <button onClick={handleClick}>点我</button>
    </div>
    
  )
}
