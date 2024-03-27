import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ data }) => {
  const { bookId, bookName, author, image, tags=[], rating, category } = data;

  return (
      <Link to={`/book-details/${bookId}`}>
          <div className="card bg-base-100 shadow-xl cursor-pointer">
      <figure className="">
              <div className="px-5 py-5 bg-[#F3F3F3]">
                  <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
      </figure>

      <div className="card-body">
        <div className="flex gap-3 mt-6 mb-4">
          {tags.map((tag, index) => (
            <h1
              key={index}
              className="px-4 font-medium py-2 bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px]"
            >
              {tag}
            </h1>
          ))}
        </div>
        <h2 className="card-title mb-4 font-bold text-2xl">{bookName}</h2>
        <p className="mb-5 font-medium text-[#131313CC]">By : {author}</p>
        <hr />
        <div className="flex justify-between mt-5">
          <h1 className="text-[#131313CC] font-medium">{category}</h1>
          <div className="flex justify-between gap-2 font-medium text-[#131313CC]">
            <p>{rating}</p>
            <CiStar className="text-xl" />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
