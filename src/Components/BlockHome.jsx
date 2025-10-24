import React from 'react'

const BlockHome = ({Number,Title,color}) => {
  return (
    <div className={`col-span-1 ${color} row-span-4 rounded `}>
            <h1 className='text-2xl text-white mt-6 mx-6'>{Title}</h1>
            <p className={`text-lg font-bold text-white flex justify-end mx-10 ${Title==="Intermediate Users"?'mt-2':'mt-10'}`}>{Number}</p>
    </div>
  )
}

export default BlockHome
