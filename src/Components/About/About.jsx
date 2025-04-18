import home from '../myimg/bgimg.jpg'
import bookshop from '../myimg/bookshop.jpg'

const About = () => {
    return (
        <div className='px-10 py-2 rounded-lg'>
            
            <div style={{backgroundImage:`url(${home})`,
                backgroundSize:'cover',
                backgroundPosition:'center'
            
            }} className="h-[400px] p-10"
            >
               <h2 className='text-4xl text-white font-bold text-center mt-4'>Between pages and silence, stories come alive.</h2>
               <p className='text-2xl text-blue-700 font-bold text-center mt-2'>  Every book holds a world waiting to be discovered —  
                        a journey through ink, paper, and imagination.  
                        Welcome to a place where words whisper,  
                        and every chapter feels like home.</p>
            </div>

            <div>
                <h2 className='text-purple-500 text-4xl text-center mt-10 font-bold'>Our Library </h2>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-6'>
                <div>
                    <img className='h-40% rounded-lg w-auto' src={bookshop} alt="" />
                </div>
                <div className='bg-indigo-300 rounded-lg p-2'> 
                    <p className='text-x mt-6 '>
                     Welcome to a place where every shelf holds a new journey.
                    From timeless classics to modern-day masterpieces, our collection speaks to every reader’s soul.
                    The scent of fresh pages and the warmth of old bindings invite you to stay a little longer.
                    Here, stories are not just sold — they’re shared, cherished, and remembered.
                    Whether you’re a curious wanderer or a devoted bibliophile, there’s something waiting for you.
                    We believe books have the power to heal, inspire, and awaken dreams.
                    Each corner of our shop whispers a tale, waiting to be discovered.
                    Children’s laughter echoes near fairy tales, while quiet minds explore history’s depths.
                    With every visit, you don’t just find books — you find a piece of yourself.
                    Welcome to your literary haven — where stories live, and readers belong.  

                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default About;