import React, { useEffect, useState } from 'react'
import BlockHome from '../Components/BlockHome'
import { useSelector } from 'react-redux';
import TableDesign from '../Components/TableDesign';
const Home = () => {
    const users=useSelector(state=>state.globalData.users)
    const [numbers,setNumbers]=useState({
        totalUsers: 0,
        advancedUsers: 0,
        intermediateUsers: 0,
        beginnerUsers: 0
    })
    const [topUsers,setTopUsers]=useState([]);
    useEffect(()=>{
        let clonedUsers=[...users]
        let sortUsers=clonedUsers.sort((a,b)=>b.score-a.score);
        let visibleUsers=sortUsers.slice(0,5)
        setTopUsers(visibleUsers);
        console.log(visibleUsers);
        let total=users.length;
        let advanced=users.filter(user=>user.level==='advanced').length;
        let intermediate=users.filter(user=>user.level==='intermediate').length;
        let beginner=users.filter(user=>user.level==='beginner').length;
        setNumbers({
            totalUsers: total,
            advancedUsers: advanced,
            intermediateUsers: intermediate,
            beginnerUsers: beginner
        })

    },[users])
  return (
    <div>
      <div className=' w-full h-[170px] grid grid-cols-4 grid-rows-4 gap-4 p-4'>
        <BlockHome Number={numbers.totalUsers} Title={'Total Users'} color={'bg-red-500'}></BlockHome>
        <BlockHome Number={numbers.advancedUsers} Title={'Advanced Users'} color={'bg-blue-500'}></BlockHome>
        <BlockHome Number={numbers.intermediateUsers} Title={'Intermediate Users'} color={'bg-yellow-500'}></BlockHome>
        <BlockHome Number={numbers.beginnerUsers} Title={'Beginner Users'} color={'bg-green-500'}></BlockHome>
      </div>
      
      <TableDesign users={topUsers}/>
    </div>
  )
}

export default Home
