import React from 'react'
import TextArea from './components/TextArea'


/**
 * The main page of the application, containing a TextArea component
 * @returns a JSX element representing the page
 */
const page = () => {
  return (
    <div className='w-[80%]  mt-14 mx-auto'>
      
      <TextArea/>
    </div>
  )
}

export default page
