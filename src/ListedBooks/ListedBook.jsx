import React, { createContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

// Create a context for sorting options
const SortingContext = createContext();

const ListedBook = () => {
  // State variables for sorting options and tab index
  const [tabIndex, setTabIndex] = useState(0);
  const [sortingOptions, setSortingOptions] = useState({
    sortByRating: false,
    sortByPages: false,
    sortByYear: false,
  });

  // Event handlers for sorting options
  const handleRating = () => {
    setSortingOptions({
      sortByRating: true,
      sortByPages: false,
      sortByYear: false,
    });
  };

  const handlePages = () => {
    setSortingOptions({
      sortByRating: false,
      sortByPages: true,
      sortByYear: false,
    });
  };

  const handlePublish = () => {
    setSortingOptions({
      sortByRating: false,
      sortByPages: false,
      sortByYear: true,
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="bg-[#1313130D] w-full rounded-2xl">
        <h1 className="text-xl font-bold text-center py-8 ">Books</h1>
      </div>
      <div className="w-full text-center mt-7 mb-20">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#23BE0A]">
            Sort By <IoMdArrowDropdown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleRating}>Rating</button>
            </li>
            <li>
              <button onClick={handlePages}>Number of pages</button>
            </li>
            <li>
              <button onClick={handlePublish}>Publisher year</button>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex mb-4 items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          onClick={() => setTabIndex(0)}
          to=""
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setTabIndex(1)}
          to={`wishlist`}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist</span>
        </Link>
      </div>
      {/* Provide sorting options to children components */}
      <SortingContext.Provider value={{ sortingOptions, setSortingOptions }}>
        <Outlet />
      </SortingContext.Provider>
    </div>
  );
};

export default ListedBook;
export { SortingContext }; 
