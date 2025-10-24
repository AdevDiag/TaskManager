import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkStyle = ({location,Name}) => {
  return (
    <NavLink className={({isActive})=>`text-center w-full   text-xl py-4 ${isActive ? 'bg-gray-300 text-gray-700' : 'text-gray-400 bg-gray-900'}`}
     to={location}>{Name}</NavLink>
  )
}

export default LinkStyle
