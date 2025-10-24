import React from 'react'

const TaskTableDesign = ({tasks}) => {
  return (
    <table className='w-[90%] mx-auto border py-1 px2'>
        <thead>
            <tr className='border py-1 px2'>
                <th className='border py-1 px2'>Id</th>
                <th className='border py-1 px2'>Title</th>
                <th className='border py-1 px2'>Status</th>

            </tr>
        </thead>
        <tbody>
            {tasks.map((task)=>{
                return <tr key={task.id}>
                    <td className='border py-1 px2 text-center'>{task.id}</td>
                    <td className='border py-1 px2 text-center'>{task.title}</td>
                    <td className='border py-1 px2 text-center'>{task.status}</td> 
                </tr>
            })}
        </tbody>
      </table>
  )
}

export default TaskTableDesign
