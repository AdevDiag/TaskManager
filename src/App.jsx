import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Tasks from './Pages/Tasks'
import AddUser from './Pages/AddUser'
import ModifyUser from './Pages/ModifyUser'
import UserDetails from './Pages/UserDetails'
import Contact from './Pages/Contact'
import About from './Pages/About'
import LinkStyle from './Components/LinkStyle'
import AddTask from './Pages/AddTask'
const App = () => {
  return (
    <div className='w-full h-screen grid grid-cols-5'>
      <BrowserRouter>
      <nav className='col-span-1 bg-gray-900 '>
        <h1 className='text-[#fee] text-4xl font-bold my-5 text-center'>TaskManager</h1>
        <ul className='flex flex-col'>
          <LinkStyle  location={'/'} Name={'Dashboard'}></LinkStyle>
          <LinkStyle  location={'/users'} Name={'Users'}></LinkStyle>
          <LinkStyle  location={'/tasks'} Name={'Tasks'}></LinkStyle>
          <LinkStyle  location={'/addUser'} Name={'AddUser'}></LinkStyle>
          <LinkStyle  location={'/contact'} Name={'Contact'}></LinkStyle>
          <LinkStyle  location={'/about'} Name={'About'}></LinkStyle>
        </ul>
      </nav>
      <main className='col-span-4 bg-[#EAE0CC] w-full min-h-screen overflow-y-auto'>

      
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
          <Route path='/addUser' element={<AddUser/>}></Route>
          <Route path='/modifyUser' element={<ModifyUser/>}></Route>
          <Route path='/users/:id' element={<UserDetails/>}></Route>
          <Route path='/users/:id/addTask' element={<AddTask/>}/>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>

        </Route>
      </Routes>
      
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App
