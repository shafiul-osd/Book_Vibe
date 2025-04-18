
import {  NavLink, Outlet } from 'react-router'
import './App.css'
import Fdocument from './Components/Fdocument/Fdocument'


function App() {
  

  return (
    <>
      <div className='flex justify-between items-center p-6'>
        <div>
          <h2 className='font-bold text-xl '>Book Vibe</h2>
        </div>
        <div className='flex gap-4'>

          <NavLink to="/" className={
            ({isActive})=>
              isActive ? "text-emerald-500 font-bold" : ""
          }>Home</NavLink>

          <NavLink to="/pagestoread" className={
            ({isActive})=>
              isActive ? "text-emerald-500 font-bold" : ""
          }>Pages To Read</NavLink>

          <NavLink to="listedbooks" className={
            ({isActive})=> isActive ? "text-emerald-500 font-bold" : ""
          }>ListedBooks</NavLink>

          <NavLink to="/about" className={({isActive})=> isActive ? "text-emerald-500 font-bold" : ""}>About</NavLink>

          <NavLink to="/contact" className={({isActive})=> isActive ? "text-emerald-500 font-bold" : ""}>Contact</NavLink>

        </div>
        <div className='flex gap-2'>
          {/* sign up and sign in button thakbe ay div er moddho */}
          <button className='bg-[#23BE0A] text-white px-3 py-2 rounded-lg'>Sign In</button>
          <button className='bg-[#59C6D2] text-white px-3 py-2 rounded-lg '>Sign Up</button>
        </div>
      </div>
      <Outlet></Outlet>
      <div>
        <footer>
          <Fdocument></Fdocument>
        </footer>
      </div>
      
    </>
  )
}

export default App
