import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decHandler, incHandler } from './redux/store/slice/countSlice'

function Count() {
    let count=useSelector((item)=>{
        return item.count
    })
    let dispatch=useDispatch()
    
    function incrementHandler()
    {
        dispatch(incHandler())
    }
    function decrementHandler()
    {
     dispatch(decHandler(1))
    }
  return (
    <>
    <h6 className='text-center'>count</h6>
    <hr/>
     <h6>inc:{count.inc}</h6>
     <h6>dec:{count.dec}</h6>
     <div>
        <button onClick={decrementHandler}>dec</button>
        <button onClick={incrementHandler}>inc</button>
     </div>
    </>
     
  )
}

export default Count