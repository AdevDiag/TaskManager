import React, { useEffect, useState, useTransition } from 'react'
import { useSelector } from 'react-redux';
import TableDesign from '../Components/TableDesign';

const Users = () => {
    const [users,setUsers]=useState([]);
    const [isPending,startTransition]=useTransition()
    let allusers=useSelector((state)=>state.globalData.users);
    const handleFilterInput=(e)=>{
        startTransition(()=>{
            if(e.target.value===''){
            setUsers(allusers);
            }else{
            const filteredUsers=allusers.filter(user=>user.username.toLowerCase().includes(e.target.value.toLowerCase()));
            setUsers(filteredUsers);
            }
        })    
    }
    const handleSortChange=(e)=>{
        let sortedUsers;
        switch(e.target.value){
            case 'scoreMin':
                sortedUsers=[...users].sort((a,b)=>a.score-b-score);
                setUsers(sortedUsers);
                break;
            case 'scoreMax':
                sortedUsers=[...users].sort((a,b)=>b.score-a.score);
                setUsers(sortedUsers);
                break;
            case 'tasksMin':
                sortedUsers=[...users].sort((a,b)=>a.tasks.length-b.tasks.length);
                setUsers(sortedUsers);
                break;
            case 'taskMax':
                sortedUsers=[...users].sort((a,b)=>b.tasks.length-a.tasks.length);
                setUsers(sortedUsers);
                break;
            default:
                setUsers(allusers);
        }

    }
    useEffect(()=>{
        setUsers(allusers);
    },[]);

  return (
<div>
    <h1 className='text-3xl font-bold text-center my-5'>Users List</h1>
    <div className='flex justify-around mb-10'>
        
        <input type="search" placeholder='search for User...' onChange={handleFilterInput} className='bg-white px-2 border rounded w-[27%]'/>
        <select name="sortType" id="sortType" className='border px-2 py-1 rounded' onChange={handleSortChange}>
            <option value="">Sort By</option>
            <option value="scoreMin">Score: min-max</option>
            <option value="scoreMax">Score: max-min</option>
            <option value="tasksMin">Tasks: min-max</option>
            <option value="tasksMax">Tasks: max-min</option>
        </select>
    </div>
      
      {isPending ? <h2 className='text-center text-2xl font-bold'>Loading...</h2> : <TableDesign users={users} />}
</div>
  )
}

export default Users
