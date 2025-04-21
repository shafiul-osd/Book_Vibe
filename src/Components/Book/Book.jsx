import { FaRegStar } from "react-icons/fa6";

const Book = ({book}) => {
    const handlecard = ()=>{
        console.log("i am cheking the image is here or not here")
    }
    const {image,bookName,author} = book
    return (
        <div>
                <button onClick={handlecard} className="border border-gray-400 rounded-lg ">
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
                </button>
        </div>
    );
};

export default Book;