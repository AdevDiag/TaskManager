import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {id}=useParams();
    const [user,setUser]=useState({});
    const data=useSelector((state)=>state.globalData.users);
    useEffect(()=>{
        let user=data.find(user=>user.id===parseInt(id));
        if(user){
            setUser(user);
            console.log(user)
        }
    },[id,data]);
  return (
    <div className='w-full'>
      <h1 className='text-3xl text-center font-bold m-10'>User Details</h1>
        <div className='ml-20'>
        <p className='text-xl my-2'><span className='font-bold'>Username:</span> {user.username}</p>
        <p className='text-xl my-2'><span className='font-bold'>Email:</span> {user.email}</p>
        <p className='text-xl my-2'><span className='font-bold'>Level:</span> {user.level}</p>
        <p className='text-xl my-2'><span className='font-bold'>Score:</span> {user.score}</p>
        </div>

        <>
        <div className=' w-[60%] flex justify-around items-center'>
            <h2 className='text-xl font-bold mx-50 my-10 '>Tasks</h2>
            <button className='border px-2 py-1 rounded hover:text-[#EAE0CC] hover:bg-black transition-all duration-150 delay-75 ease-out' >Add Task</button>
        </div>
        <table className='w-[50%] ml-40 border '>
            <thead >
                <tr >
                    <th className='border '>Task ID</th>
                    <th className='border '>Title</th>
                    <th className='border '>Status</th>
                </tr>
            </thead>
            <tbody>
                {user.tasks && user.tasks.map((task)=>{
                    return <tr key={task.id}>
                    <td className='border py-1 px2 text-center'>{task.id}</td>
                    <td className='border py-1 px2 text-center'>{task.title}</td>
                    <td className={`border py-1 px2 text-center text-white ${task.status==='pending'?'bg-red-500':task.status==='in-progress'?'bg-blue-500':'bg-green-500'}`}>{task.status}</td>

                    </tr>
                })}
            </tbody>
        </table>
        </>
    </div>
  )
}

export default UserDetails
