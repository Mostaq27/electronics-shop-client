import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import img from "../../assets/logo.jpg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error);
            });
    };


    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            {user?.email ? (
                <li>
                    <Link to="/addproduct">Add Product</Link>
                </li>
            ) : (
                ""
            )}
            {user?.email ? (
                <li>
                    <Link to="/mycart">My Cart</Link>
                </li>
            ) : (
                ""
            )}
            
            {user?.email ? (
                <li>
                    <Link>
                        <button onClick={handleLogOut}> Log out </button>
                    </Link>
                </li>
            ) : (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )}
        </>
    );
    

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={img} alt="logo" className=" rounded-xl h-[30px]" />
                    <a className="btn btn-ghost capitalize text-2xl font-bold">Tech<span className=" text-orange-500">Point</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.photoURL ? (
                    <>
                        <h3 style={{ color: "orange" }} className="text-xl font-bold">
                            {user?.displayName}
                        </h3>
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                            <div className="avatar">
                                <div className="w-12 m-4 rounded-full ring ring-gray-600 ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <FaUserAlt style={{ fontSize: "2rem" }} />
                )}
            </div>
        </div>
    );
};
export default Navbar;