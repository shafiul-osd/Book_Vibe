import { useEffect, useState } from "react";
import { useParams } from "react-router";


const Bookdetiels = () => {

    const {id} = useParams()
    const [book,setbook]= useState(null)

    useEffect(()=>{
        fetch("/book.json")
        .then(res=>res.json())
        .then(data=>{const matched=data.find(item=>item.bookId === parseInt(id));
            setbook(matched)
        })
    },[id])
    if(!book) return <p>loading....</p>
    const {author,bookName,image,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book

    return (
        <div>
            <div className="flex gap-4">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <p>{category}</p>
                <p>{review}</p>
                <p>#{tags}</p>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>


            </div>
            <div className="flex gap-2">
                <button>Read</button>
                <button>Wistlist</button>
            </div>
            </div>
            
        </div>
    );
};

export default Bookdetiels;