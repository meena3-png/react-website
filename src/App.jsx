import React from 'react'

import Homework from './components/Homework'
import MarketItemApp from './components/marketITemApp'
import PreviewDAta from './components/PreviewDAta'
import ToDoList from './components/ToDoList'
import { Routes, Route } from 'react-router'

//page 
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MainLayout from './components/MainLayout'
import NotFound from './pages/NotFound'
import UserList from './pages/UserList'
import UsersDetail from './pages/UsersDetail'
import PostNewPage from './pages/PostNewPage'
const App = () => {

  return (
    <div>
      {/* <PreviewDAta/> */}
      {/* <Homework /> */}
      {/* <MarketItemApp /> */}
      {/* <ToDoList/> */}

      <Routes>
        {/* <Route index element= { <h1>hello</h1>}/> */}
        <Route element={<MainLayout/>}>
              <Route index element= { <Home/>}/>
              <Route path='/about' element= {<AboutPage/>}/>
              <Route path='/contact' element= {<ContactPage/>}/>
              <Route path='/users' element= {<UserList/>}/>
              <Route path='/users/:userId' element= {<UsersDetail/>}/> 
              <Route path='/new' element= {<PostNewPage/>}/>                

        </Route>

        <Route path='*' element={<NotFound/>}/>


      </Routes>
    </div>
  )
}

export default App