import Button from './Button'
import SearchBar from './SearchBar'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex items-start justify-between'>
        <SearchBar />   
        <div>
            
        <Button text="login / " size='md' variant='link' path="/login"/>
        <Button text="Sign up" size='md' variant='primary' path="/signup"/>
        </div>
    </div>
  )
}

export default Header