import { useNavigate } from 'react-router';
import book from '../myimg/book.jpg'

const Banner = () => {

const navigate = useNavigate();

const handlenavigate = ()=>{
    navigate("/pagesToRead")
}


    return (
        <div className="bg-[#f1eaead3] rounded-lg md:px-16 py-4 md:grid grid-cols-2 gap-2">
            <div className='col-span-1 py-10 px-6'>
                <h2 className="text-[#131313] text-5xl font-bold">Books to freshen up your bookshelf</h2>
                <button onClick={handlenavigate} className="bg-[#23BE0A] text-white p-2 rounded-sm mt-2">View The List</button>
            </div>
            <div className='col-span-1 px-10 py-7'>
                    <img className='w-30% rounded-lg' src={book} alt="" />
            </div>
        </div>
    );
};

export default Banner;