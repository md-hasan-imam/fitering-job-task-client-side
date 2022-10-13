import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/finalLogo.png';
import auth from '../../firebase.init';
import avatarImg from '../../assets/images/icons/avatar.png'
import { useLocation } from 'react-router-dom';
import SmallSocialIcons from './SmallSocialIcons';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const location = useLocation();
    console.log(location);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li><Link to='/' className='hover:text-primary active:text-primary focus:text-primary px-4 py-2'>Home</Link></li>
        <li><Link to='/about' className='hover:text-primary active:text-primary focus:text-primary px-4 py-2'>About Us</Link></li>
        <li><Link to='/appointment' className='hover:text-primary active:text-primary focus:text-primary px-4 py-2'>Appointment</Link></li>
        <li><Link to='/contactus' className='hover:text-primary active:text-primary focus:text-primary px-4 py-2'>Contact Us</Link></li>
        {user && <li><Link to='/dashboard' className='hover:text-primary active:text-primary focus:text-primary px-4 py-2'>Dashboard</Link></li>}
    </>

    return (
        <header>
            <div className='flex justify-between items-center bg-secondary text-xs md:text-sm  font-semibold px-3 sm:px-10 py-4'>
                <div className='flex flex-col md:flex-row'>
                    <h4 className=' text-white inline-block mr-5 sm:mr-10'>Contact Number: 090 98763456</h4>
                    <h3 className=' text-white inline-block '>Location : 22, South Wales, New York</h3>
                </div>
                <div className='text-white'>
                    <SmallSocialIcons></SmallSocialIcons>
                </div>
            </div>
            <nav className='my-2'>
                <div className="navbar bg-base-100 p-0 m-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="navigation-links menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-xl w-52 ">
                                {menuItems}
                            </ul>
                        </div>
                        <a href='/'>
                            <img src={logo} alt="" className='h:10 sm:h-16  ml-4' />
                        </a>
                    </div>
                    <div className=" navbar-center hidden lg:flex">
                        <ul className="menu-horizontal p-0 text-lg font-semibold">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end lg:w-64 mr-5 lg:mr-10">
                        {
                            user ?
                                <div className="dropdown dropdown-end avatar">
                                    <label tabIndex={5} className=" m-1">
                                        <div className="w-7 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                            <img src={avatarImg} alt='user name' className='w-7' />
                                        </div>
                                    </label>
                                    <ul tabIndex={5} className="dropdown-content menu p-2 shadow bg-base-100 rounded-xl w-52">
                                        <li><Link to='/dashboard'>Appointments</Link></li>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        <li><button onClick={logout} className="">Logout</button></li>
                                    </ul>
                                </div>
                                :
                                <Link to='/login' className="btn  btn-outline px-6 ">Login</Link>
                        }


                        {/* dashboard sidebar for small device  only when it is dashboard route*/}

                        {
                            location.pathname === '/dashboard' && <label tabIndex="2" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;