import React from 'react'
import { setNodes } from '../slice/flowSlice'
import {useDispatch , useSelector} from 'react-redux'

const Button = () => {

    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(setNodes())} className=' px-14 rounded-3xl py-4 bg-blue-400'>Add</button>
    </div>
  )
}

export default Button