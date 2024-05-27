import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/menu'}>OUR MENU</Link></li>
        <li><Link to={'/order/salad'}>ORDER FOOD</Link></li>
        <li><Link to={'/signup'}>SIGNUP</Link></li>

    </>

    return (
        <div className="navbar max-w-screen-2xl mx-auto fixed z-10 bg-opacity-30 bg-[#15151580] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link>
                    <div className="flex flex-col uppercase pl-3">
                        <button className="text-2xl font-extrabold uppercase">Bistro Boss</button>
                        <button className="text-xl text-center font-bold uppercase">Restaurant</button>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-4">
                            {/* <p>{user?.displayName}</p> */}
                            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                            <button className='btn bg-[#D1A054B3] border-none text-white font-bold' onClick={handleLogOut}>LOG OUT</button>
                        </div> :

                        <button className='btn bg-[#D1A054B3] text-white border-none font-bold'>
                            <Link to={'/login'}>LOGIN</Link>
                        </button>

                }
            </div>
        </div>
    );
};

export default Navbar;