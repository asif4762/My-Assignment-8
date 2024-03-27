import { Link, NavLink } from "react-router-dom";


const NavBer = () => {
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto mt-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
              Home
            </NavLink>

            <NavLink to="/listed-to-books" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
              Listed Books
                      </NavLink>
                      <NavLink to="/pages-to-read" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            Pages To Read
            </NavLink>
            
            <NavLink to="/book-shop" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            Book Shop
            </NavLink>
            
            <NavLink to="/book-cart" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            My Cart
          </NavLink>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl font-bold">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-3 px-1">
          <NavLink to="/" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            Home
          </NavLink>

          <NavLink to="/listed-to-books" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            Listed Books
          </NavLink>
          <NavLink to="/pages-to-read" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            Pages To Read
          </NavLink>

          <NavLink to="/book-shop" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            Book Shop
          </NavLink>

          <NavLink to="/book-cart" className={({isActive}) => isActive ? 'p-2 text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg' : 'font-bold p-2 rounded-lg'}>
            My Cart
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23BE0A] hover:bg-white hover:border-2 hover:border-[#23BE0A] hover:bg-none mr-2 ">
          Sign in
        </a>
        <a className="btn bg-[#59C6D2] hover:bg-white hover:border-2 hover:border-[#59C6D2] hover:bg-none ml-2">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default NavBer;
