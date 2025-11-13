import React from 'react'
import {Container , Logo , LogoutBtn} from '../index'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authstatus = useSelector((state) => state.auth.status)
  const navgiate = useNavigate();

  const navItems = [
    {
      name : 'Home',
      path : '/',
      active : true,
    } , {
      name : 'Login', 
      path : '/login',
      active : !authstatus,
    } , {
      name : 'Signup',
      path : '/signup',
      active : !authstatus,
    } , {
      name : 'All posts',
      path : '/all-posts',
      active : authstatus,
    } , {
      name : 'Add post',
      path : '/add-post',
      active : authstatus,
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-700'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
              <Link to='/'>
                  <Logo width='70px' />
                      
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? 
            <li key={item.name}><button onClick={() => navgiate(item.path)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button></li>
            : null)}
            {authstatus && (
              <li>
                <LogoutBtn />
                {/* agar authencatted ho too logout button lo nhi to no need   */}
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header;