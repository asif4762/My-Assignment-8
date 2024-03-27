import { useEffect, useState } from "react";
import { getFromLocalStorageBookCart } from "../Utils/LocalStorageBookCart";
import MyBookCart from "../MyCart/MyBookCart";

const BookBuyCards = () => {
  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    setSaveData(getFromLocalStorageBookCart());
  }, [saveData]);
  // console.log(saveData);

  return (
    <div className="max-w-6xl mx-auto">
      { saveData.length > 0 ? saveData.map((book) => (
        <MyBookCart key={book.bookId} book={book}></MyBookCart>
      )) : <h1 className="text-center bg-red-500 py-10 text-5xl font-bold rounded-3xl text-white">Your Cart is Empty</h1>}
    </div>
  );
};

export default BookBuyCards;
