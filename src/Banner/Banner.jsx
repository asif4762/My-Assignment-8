import { Link } from "react-router-dom";
import "../Css/main.css";

const Banner = () => {
  return (
    <div className=" mt-14 playfair-display max-w-6xl bg-[#1313130D] mx-auto rounded-3xl">
      <div className="flex justify-between px-12 lg:px-24 py-10 lg:py-20">
        <div className="flex flex-col justify-center gap-12">
          <h1 className="font-bold text-4xl lg:text-6xl">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Link to="/listed-to-books">
            <button className="font-bold p-4 rounded bg-[#23BE0A] text-white hover:bg-green-900">
              View The List
            </button>
          </Link>
        </div>
              <div>
                  <img className="" src="https://i.ibb.co/Q84FXn8/pngwing-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
