import React, { useContext, useEffect, useState } from "react";
import { getFromLocalStorageWishlist } from "../Utils/LocalStorageWishlist";
import WishlistCard from "../WishlistCard/WishlistCard";
import { SortingContext } from "../ListedBooks/ListedBook";

const Wishlist = () => {
  const { sortingOptions } = useContext(SortingContext);

  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    setSaveData(getFromLocalStorageWishlist());
  }, []);

  useEffect(() => {
  let newData = [...saveData];
  if (sortingOptions.sortByPages && newData.length > 0) {
    let sorted = newData.sort((a, b) => b.totalPages - a.totalPages);
    setSaveData(sorted);
  }
}, [saveData, sortingOptions.totalPages]);


  useEffect(() => {
    let newData = [...saveData];
    if (sortingOptions.sortByRating && newData.length > 0) {
      let sorted = newData.sort((a, b) => b.rating - a.rating);
      setSaveData(sorted);
    }
  }, [saveData, sortingOptions.sortByRating]);

  useEffect(() => {
    let newData = [...saveData];
    if (sortingOptions.sortByYear && newData.length > 0) {
      let sorted = newData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setSaveData(sorted);
    }
  }, [saveData, sortingOptions.sortByYear]);

  return (
    <div>
      {saveData.length > 0 ? (
        saveData.map((item) => (
          <WishlistCard key={item.bookId} data={item}></WishlistCard>
        ))
      ) : (
        <h1 className="text-center bg-red-500 py-10 text-5xl font-bold rounded-3xl text-white">
          No books added in wishlist
        </h1>
      )}
    </div>
  );
};

export default Wishlist;
