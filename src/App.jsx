
import { Link, Outlet } from 'react-router'
import './App.css'

function App() {
  

  return (
    <>
      <div className='flex justify-between items-center p-6'>
        <div>
          <h2>Book Vibe</h2>
        </div>
        <div className='flex gap-4'>
          <Link to="/">Home</Link>
          <Link to="/pagesToRead">Page To Read</Link>
          <Link to="/listedBooks">Listed Books</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='flex gap-2'>
          {/* sign up and sign in button thakbe ay div er moddho */}
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <Outlet></Outlet>
      <div>
        <footer>
          <h2>this is the footer</h2>
        </footer>
      </div>
      
    </>
  )
}

export default App
