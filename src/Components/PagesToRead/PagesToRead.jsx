import { Outlet } from "react-router";
import { Link } from "react-router";


const PagesToRead = () => {
    return (
        <div>
            <div className="flex gap-4">
            <Link to="listbook">Listedbook</Link>
            <Link to="wishlist">Wishlistbook</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default PagesToRead;