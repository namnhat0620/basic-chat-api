import React, { useState } from 'react'
import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const AddFriend = <FontAwesomeIcon icon={faUserPlus} />
const Search = () => {

  const [searchinput, setSearchInput] = useState("")
  const customSearchInput = {
    padding: "20px 10px 10px 10px"
  }
  const handleSearchInput =(event)=>{
    setSearchInput(event.target.value)
  }
  const handleSearch = (event) => {
    if(event.key ==="Enter"){
      console.log(searchinput)
      /*xử lí search ở đây*/
    }
  }

  return (
    <div className = 'search_container'>
      <input
        placeholder='Search message'
        type='text'
        value={searchinput}
        onChange={handleSearchInput}
        onKeyDown={handleSearch}
      />

      <i>{AddFriend}</i>

    </div>
  )
}

export default Search