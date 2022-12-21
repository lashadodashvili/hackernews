import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handelSearch } = useGlobalContext();




  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Search Hacker News </h2>
      <input type='text' className='form-input' value={query}
        onChange={(e) => handelSearch(e.target.value)} />
    </form>
  )
}

export default SearchForm
