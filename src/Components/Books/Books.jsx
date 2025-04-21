import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books,setbook]= useState([])

    useEffect(()=>{
        fetch("book.json")
        .then(res=>res.json())
        .then(data=>setbook(data))

    },[])

    return (
        <div>
           <div className="text-center font-bold text-2xl">
            <h2>Books: {books.length}</h2>
           </div>
           <div>
            {/* parrent component of all the books */}
               {
                books.map(book=><Book book={book} key={book.id}></Book>)
               }
           </div>
        </div>
    );
};

export default Books;