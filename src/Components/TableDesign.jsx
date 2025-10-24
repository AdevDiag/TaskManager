import React from 'react'
import { Link } from 'react-router-dom'
const TableDesign = ({users}) => {

  return (
    <table className='w-[90%] mx-auto border py-1 px2'>
        <thead>
            <tr className='border py-1 px2'>
                <th className='border py-1 px2'>Id</th>
                <th className='border py-1 px2'>Username</th>
                <th className='border py-1 px2'>Level</th>
                <th className='border py-1 px2'>Tasks</th>
                <th className='border py-1 px2'>Score</th>
                <th className='border py-1 px2'></th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>{
                return <tr key={user.id}>
                    <td className='border py-1 px2 text-center'>{user.id}</td>
                    <td className='border py-1 px2 text-center'>{user.username}</td>
                    <td className='border py-1 px2 text-center'>{user.level}</td>
                    <td className='border py-1 px2 text-center'>{user.tasks.length}</td>
                    <td className='border py-1 px2 text-center'>{user.score}</td>
                    <td className='border py-1 px2 text-center'><Link to={`/users/${user.id}`} className='py-1 px-2 border border-gray-700 rounded text-blue-600 cursor-pointer'>View</Link></td>
                </tr>
            })}
        </tbody>
      </table>
  )
}

export default TableDesign
