import { useParams } from "react-router-dom";
import useBookData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";
import { saveToLocalStorageReadBooks } from "../Utils/LocalStorageReadBooks";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorageWishlist } from "../Utils/LocalStorageWishlist";

const BookDetails = () => {
  const handleSaveReadBooks = () => {
    saveToLocalStorageReadBooks(singleBookData);
  };

  const handleSaveWishlist = () => {
    saveToLocalStorageWishlist(singleBookData);
  };

  const { id } = useParams();

  const { bookData } = useBookData();
  // console.log(bookData);

  const [singleBookData, setSingleBookData] = useState({});

  useEffect(() => {
    const singleBook = bookData.find((item) => item.bookId == id);
    setSingleBookData(singleBook);
  }, [bookData, id]);

  // console.log(singleBookData);

  const {
    yearOfPublishing,
    bookName,
    author,
    image,
    tags = [],
    publisher,
    rating,
    category,
    totalPages,
    review,
  } = singleBookData || {};

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <ToastContainer/>
      <div className="card lg:card-side  shadow-xl flex gap-10">
        <img
          className="w-[500px] p-20 bg-cover rounded-3xl"
          src={image}
          alt="Album"
        />

        <div className="">
          <h2 className="card-title text-4xl mb-4 font-bold">{bookName}</h2>
          <p className="mb-4  text-[#131313CC]">by : {author}</p>
          <hr />
          <p className="mt-4 mb-4">{category}</p>
          <hr />
          <h1 className="mt-4 mb-4">
            <span className="font-bold">Review :</span>
            <span>{review}</span>
          </h1>
          <h1 className="flex gap-4 items-center mb-4">
            <span className="font-bold">Tags</span>
            <p className="flex gap-3">
              {tags.map((tg, index) => (
                <span
                  key={index}
                  className="text-[#23BE0A] font-medium px-4 py-2 bg-[#23BE0A0D] rounded-3xl"
                >
                  #{tg}
                </span>
              ))}
            </p>
          </h1>
          <hr />
          <div className="flex gap-14 mt-6 mb-4">
            <div>
              <h1 className="font-bold">Number of Pages:</h1>
              <h1 className="font-bold">Publisher:</h1>
              <h1 className="font-bold">Year of Publishing:</h1>
              <h1 className="font-bold">Rating:</h1>
            </div>
            <div>
              <h1>{totalPages}</h1>
              <h1>{publisher}</h1>
              <h1>{yearOfPublishing}</h1>
              <h1>{rating}</h1>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={handleSaveReadBooks}
              className="btn hover:border hover:border-[#131313]"
            >
              Read
            </button>
            <button
              onClick={handleSaveWishlist}
              className="btn bg-[#50B1C9] hover:border hover:border-blue-900 hover:bg-blue-800"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
