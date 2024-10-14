"use client"
import { count } from 'console'
import React, {  useState } from 'react'

const TextArea = () => {
  const [data,setData] =useState('')
  const [count,setCount] = useState(0)
  const handleChange = (e:any) => {
    setData(e.target.value)
   
  }
  const handleClick = () => {

    const newData = data.split(' ')
    let c = 0;

    for(let d of newData){
      d? c++ : null
    }
    setCount(c)
    console.log(count)
  }

/*************  ✨ Codeium Command 🌟  *************/
  /**
   * Resets the textarea and the count to zero
   */
  const handleClose = () => { 
    // Reset the text area
    setData('')
    // Reset the count
    setCount(0)
  }

/******  1be679ad-cb7f-4e5b-ad80-0ec91758d299  *******/
  return (
    <div className='w-full flex-col items-center flex p-4 '>
      <textarea name="nifad" id="" cols={30} rows={25}  className=' bg-gray-900 hover:ring-0 hover:outine-none w-[80%] mx-auto mt-4 p-4 text-lg text-gray-400 rounded-md' 
      value={data}
      onChange={handleChange}
      placeholder='Enter your text here'  
      >

      </textarea>
      {
        count ? (<div className='flex gap-4'>
          <p className='text-3xl font-bold  transition-colors mt-4'>{count} words</p> 
          
          <button className='bg-slate-50 hover:bg-slate-100 w-24   py-1 px-4 rounded-lg hover:bg-slate-60 text-slate-700 text-xl     transition-colors mt-4'
          onClick={handleClose}
          > close</button>
        </div>
        ):(
          <button className='bg-slate-50 hover:bg-slate-100 text-slate-700 text-xl py-1 px-4 rounded-lg transition-colors mt-4'
          onClick={handleClick}
          > count</button>
        )
      }
      
    </div>
  )
}

export default TextArea
