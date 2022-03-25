
import React, { useState } from 'react'
import { BiMove } from "react-icons/bi";
import { AiOutlineCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
const Item = () => {
    const [xDirection,setXDirection] =useState(0)
    function inc(x) {
        if(x===1){
            setXDirection(xDirection + 2)
        }
        else if(x===-1){
            if (xDirection>0) {
                setXDirection(xDirection - 2)
            }
        }
    }
    let offsetX, offsetY
    const move = e => {
        const el = e.target
        el.style.left = `${e.pageX - offsetX}px`
        el.style.top = `${e.pageY - offsetY}px`
    }
    const add = e => {
        const el = e.target
        offsetX = e.clientX - el.getBoundingClientRect().left
        offsetY = e.clientY - el.getBoundingClientRect().top
        el.addEventListener('mousemove', move)
    }
    const remove = e => {
        const el = e.target
        el.removeEventListener('mousemove', move)
    }

    
  return (
      <div className='flex flex-row border-b-2  gap-8'>
          <div className='flex flex-row py-3'>
              <button className="text-2xl" title='Indent' onClick={()=>inc(-1)}><AiOutlineCaretLeft /></button>
              <button className="text-2xl" title='Outdent' onClick={() => inc(1)} ><AiFillCaretRight /></button>
              <button className="text-2xl" title='Delete'><MdDeleteForever /></button>
          </div>
          {/* This We Will Manipulate Classname*/}
          <div className={`pl-${xDirection}`}>
              <div className={` h-10 w-10 min-h-full min-w-full  bg-slate-500`}></div>
          </div>
          <div className="py-3 font-bold w-full">
              Number
          </div>
      </div>
  )
}

export default Item