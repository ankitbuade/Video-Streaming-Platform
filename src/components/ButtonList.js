import React from 'react'
import Button from './Button'

const ButtonList = () => {
  

  return (
    <div className='flex border-solid border-black '>
      
      <Button name="trending"/>
      <Button name="news"/>
      <Button name="movies"/>
      <Button name="songs"/>
      <Button name="comedy"/>
      <Button name="live"/>
      <Button name="bhajan"/>
      <Button name="new year"/>
      <Button name= "festival"/>
      
    </div>
  )
}

export default ButtonList
