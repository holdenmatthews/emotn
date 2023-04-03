import React from 'react'
import { BsXSquare } from "react-icons/bs";

const Alert = (props) => {
    const { message, setIsOpen } = props
  return (
    <div className='rounded bg-green-800 bg-opacity-20 p-3 m-4 flex flex-col shadow-lg'>
        <h3 className='text-green-950 text-center'>{message}</h3>
        <div className='flex flex-row justify-end'>
        <button className="shadow-md bg-green-800 text-green-50 rounded p-1 transition-all duration-300 ease-in-out hover:bg-opacity-30 hover:text-green-950" onClick={() => setIsOpen(false)}><BsXSquare /></button>
        </div>
    </div>
  )
}

export default Alert