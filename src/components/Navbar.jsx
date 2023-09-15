import '../styles/globals.css';
import '../styles/Navbar.css';

import {MdTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {PiDotsNineBold} from 'react-icons/pi';
import { useState } from 'react';


const Navbar = () => {

  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar');
  };


  return (
   <section className='navBarSection'>
  <header className="header-bg fixed flex justify-between items-center w-full z-[1000] p-[1rem] shadow shadow-blue-900/50 hover:shadow-indigo-900/50">

    <div className="logo text-[#362020] ">
      <a href="#" className="flex font-semibold items-center justify-center cursor-pointer">
        <h1 className='text-4xl text-blue-500 flex p-2'><MdTravelExplore className='icon-1 text-[25px] text-[#3c8dc6] translate-y-[5px]' />Travel.</h1>
      </a>
    </div>

    <div className={`lg:${active} navBar max-md:absolute bg-[#f0efef] h-max w-[80%] lg:w-auto rounded-[1rem] top-[-500rem] left-[50%] z-[2000] bg-black-100 shadow-lg shadow-cyan-500/50 lg:shadow-none translate-x-[-50%] lg:translate-x-0 transition duration-100 ease-in-out p-[1rem]`}>
      <ul className="navLists flex flex-col lg:flex-row justify-center w-full m-auto py-2 px-0 lg:py-0">
        <li className='py-2 px-0 lg:px-4'>
          <a href="#" className='text-[#706e6e] hover:text-[#3c8dc6] text-2xl font-semibold'>Home</a>
        </li>
        <li className='py-2 px-0 lg:px-4'>
          <a href="#" className='text-[#706e6e] hover:text-[#3c8dc6] text-2xl font-semibold'>Packages</a>
        </li>
        <li className='py-2 px-0 lg:px-4'>
          <a href="#" className='text-[#706e6e] hover:text-[#3c8dc6] text-2xl font-semibold'>Shop</a>
        </li>
        <li className='py-2 px-0 lg:px-4'>
          <a href="#" className='text-[#706e6e] hover:text-[#3c8dc6] text-2xl font-semibold'>About</a>
        </li>
        <li className='py-2 px-0 lg:px-4'>
          <a href="#" className='text-[#706e6e] hover:text-[#3c8dc6] text-2xl font-semibold'>Pages</a>
        </li>
        <li className='py-2 px-0 lg:px-4'>
          <a href="#" className='text-[#706e6e] hover:text-[#3c8dc6] text-2xl font-semibold'>News</a>
        </li>
        <li className='py-2 px-0 lg:px-4'>
          <a href="#" className='text-[#706e6e] hover:text-[#3c8dc6] text-2xl font-semibold'>Contact</a>
        </li>
        <button className='btn mt-[1rem] lg:mt-0 lg:ml-4'>
          <a href="#" className='font-semibold text-[#f0efef]'>Book Now</a>
        </button>
      </ul>

      <div onClick={removeNavbar} className="closeNavbar lg:hidden absolute top-[1rem] right-[1.5rem] text-[#3c8dc6] hover:text-[#362020]">
        <AiFillCloseCircle className='icon-2 text-[25px] text-[#3c8dc6] hover:text-[#706e6e]' />
      </div>
    </div>

    <div onClick={showNav} className="toggleNavbar lg:hidden">
      <PiDotsNineBold className='icon-3 text-[25px] text-[#3c8dc6] hover:text-[#706e6e] ' />
    </div>
  </header>
</section>

  )
}

export default Navbar