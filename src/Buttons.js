import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {

  const { isLoading, page, nbPages, handelPage } = useGlobalContext()



  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handelPage('dec')}>Prev</button>
      <p>{page + 1} of {nbPages}</p>
      <button disabled={isLoading} onClick={() => handelPage('inc')}>Next</button>


    </div>
  )
}

export default Buttons
