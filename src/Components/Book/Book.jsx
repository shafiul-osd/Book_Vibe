import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({book}) => {
   
    const {id,image,bookName,author} = book
    return (
        <div>
               <Link to={`/book/${book.bookId}`}>
               <div className="p-4">
                <div className="bg-gray-200 rounded-lg p-4">
                        <img className="w-80 h-72 object-cover rounded-lg " src={image} alt="" />
                    </div>
                </div>
                    <div>
                        <div className="flex gap-4 px-4">
                            <button className="bg-gray-200 rounded-lg p-2 text-green-400 font-bold">Young Audlt</button>
                            <button className="bg-gray-200 rounded-lg p-2 text-green-400 font-bold">Identity</button>
                        </div>
                        <div className="text-left p-4 border-b border-dotted">
                            <h2 className="font-bold text-2xl">{bookName}</h2>
                            <p className="text-sm mt-2">By:{author}</p>
                        </div>
                        <div className="flex justify-between p-4 text-sm">
                            <div>
                                <p>Fiction</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <p>5.00</p>
                                <span>
                                    <FaRegStar></FaRegStar>
                                </span>

                            </div>
                        </div>
                    </div>
               </Link>
        </div>
    );
};

export default Book;