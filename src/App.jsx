import { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import './App.css';
import Fdocument from './Components/Fdocument/Fdocument';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';



function App() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <Toaster></Toaster>
      <div className=''>
        {/* Navbar Container */}
        <div className='flex items-center justify-between px-6 py-4 md:py-6'>

          {/* Logo */}
          <div className='z-20'>
            <h2 className='font-bold text-xl'>Book Vibe</h2>
          </div>

          {/* Centered Routes */}
          <div className='hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2 z-10'>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>Home</NavLink>
            <NavLink to="/pagestoread" className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>Pages To Read</NavLink>
            <NavLink to="/listedbooks" className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>ListedBooks</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>Contact</NavLink>
          </div>

          {/* Sign In/Up */}
          <div className='hidden md:flex gap-2 z-20'>
            <button className='bg-[#23BE0A] text-white px-3 py-2 rounded-lg'>Sign In</button>
            <button className='bg-[#59C6D2] text-white px-3 py-2 rounded-lg'>Sign Up</button>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className='md:hidden text-2xl z-30'>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden flex flex-col gap-4 px-6 pb-4'>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>Home</NavLink>
            <NavLink to="/pagestoread" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>Pages To Read</NavLink>
            <NavLink to="/listedbooks" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>ListedBooks</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-emerald-500 font-bold" : ""}>Contact</NavLink>

            <div className='flex gap-2'>
              <button className='bg-[#23BE0A] text-white px-3 py-2 rounded-lg'>Sign In</button>
              <button className='bg-[#59C6D2] text-white px-3 py-2 rounded-lg'>Sign Up</button>
            </div>
          </div>
        )}
      </div>

      <Outlet />

      <footer>
        <Fdocument />
      </footer>
    </>
  );
}

export default App;
