import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router";


const Bookdetiels = () => {
    
    const navigate = useNavigate()

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


    // added the read book funclity

    const handletoread = ()=>{
        const excting = JSON.parse(localStorage.getItem("pagesToRead")) || [];
        const isExcting = excting.find(item=> item.bookId === book.bookId);

        if(!isExcting){
            excting.push(book);
            localStorage.setItem("pagesToRead",JSON.stringify(excting))
            toast.success('added to readlist')
        }
        else{
            toast.error("already added on readlist")
        }
        // navigate to readlist
        if(!isExcting){
            excting.push(book);
            localStorage.setItem("pagesToRead", JSON.stringify(excting));
            toast.success('Added to Readlist');
            navigate("/pagestoread/listbook");
    }



    const {author,bookName,image,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book

    return (
        <div className="md:p-10">
            <Toaster></Toaster>
            <div className="flex justify-around gap-2">
            <div className="">
                <img className="w-96 h-3/4 bg-gray-300 p-4 rounded-lg " src={image} alt="" />
            </div>
            <div className="w-2xl">
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <p>{category}</p>
                <p>{review}</p>
                <p>#{tags}</p>
                <p>{totalPages}</p>
                <p>{publisher}</p>
                <p>{yearOfPublishing}</p>
                <p>{rating}</p>

                <div className="flex gap-2">
                <button onClick={handletoread} className="bg-gray-300 p-4 rounded-lg text-white">Read</button>
                <button className="bg-green-400 p-4 rounded-lg text-white">Wistlist</button>
            </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default Bookdetiels;