import React from 'react'
import { Outlet , Link, NavLink} from 'react-router'
const MainLayout = () => {
  return (
    <div>
        <header className='main_header'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About </Link>
            <Link to="/contact">Contact </Link>
            <Link to="/users">Users </Link>

        </header>
          
            <Outlet/> {/* ແທນດ້ວຍທູກໜ້າ */}
        

        {/* <footer className='main_footer'>
            <NavLink className={({isActive}) => (isActive ? "is-active": "")} 
            to={"/contact"}>Contact </NavLink>
        </footer> */}
    </div>
  )
}

export default MainLayout