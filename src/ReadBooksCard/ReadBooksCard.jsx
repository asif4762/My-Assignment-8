/* eslint-disable react/prop-types */
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
const ReadBooksCard = ({ data }) => {
  const { bookId, image, bookName, author, totalPages, tags = [], publisher, category, rating, yearOfPublishing } = data;

  return (
    <div className="w-full lg:flex p-6 gap-7 rounded-2xl border border-[#13131399] mt-7">
      <div className="bg-[#1313130D] rounded-2xl">
        <img className="px-14 py-9 h-full w-[500px]" src={image} alt="" />
      </div>
      <div className="w-full">
        <h1 className="mt-4 font-bold text-2xl">{bookName}</h1>
        <p className="mt-4">{author}</p>
        <p className="mt-4 flex gap-4 items-center">
          <span className="font-bold">Tags :</span>
          <h1 className="flex flex-col lg:flex-row gap-3">
            {tags.map((tag, index) => (
              <p
                className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-[30px]"
                key={index}
              >
                #{tag}
              </p>
            ))}
          </h1>
          <span className="flex item-center">
            <MdOutlineLocationOn className="text-xl flex" />
            Year of Publishing: {yearOfPublishing}
          </span>
        </p>
        <div className="flex items-center gap-2 mt-3 text-[#13131399]">
          <MdPeopleAlt className="mt-3" />
          <h1 className="mt-3">publisher: {publisher}</h1>
        </div>
        <div className="flex items-center gap-2 text-[#13131399]">
          <MdOutlineFindInPage className="" />
          <h1 className="mt-3 mb-3">pages : {totalPages}</h1>
        </div>
        <hr />
        <div className="flex gap-4 mt-4">
          <p className="text-[#328EFF] bg-[#328EFF26] px-5 py-3 rounded-3xl">
                      Category: {category}
          </p>
          <p className="text-[#FFAC33] bg-[#FFAC3326] px-5 py-3 rounded-3xl">
            Rating: {rating}
          </p>
          <Link to={`/book-details/${bookId}`}>
            <button className="text-[#FFFFFF] bg-[#23BE0A] px-5 py-3 rounded-3xl font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooksCard;
