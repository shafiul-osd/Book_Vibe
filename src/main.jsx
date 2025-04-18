import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App></App>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/listedbooks" element={<ListedBooks></ListedBooks>}></Route>
      <Route path="/pagestoread" element={<PagesToRead></PagesToRead>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
