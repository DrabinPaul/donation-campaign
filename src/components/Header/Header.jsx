import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png'

const Header = () => {
    const links = <>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>Home</NavLink>
        <NavLink to='/donation' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>Donation</NavLink>
        <NavLink to='/statistics' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline text-xl font-bold" : "text-xl font-bold"
        }>Statistics</NavLink>
    </>
    return (
        <div className='py-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className='w-56' src={Logo} alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;