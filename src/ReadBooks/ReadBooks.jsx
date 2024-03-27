import React, { useContext, useEffect, useState } from "react";
import { getFromLocalStorageReadBooks } from "../Utils/LocalStorageReadBooks";
import ReadBooksCard from '../ReadBooksCard/ReadBooksCard';
import { SortingContext } from "../ListedBooks/ListedBook";

const ReadBooks = () => {
    const { sortingOptions } = useContext(SortingContext);
const [saveData, setSaveData] = useState([]);

    useEffect(() => {
        setSaveData(getFromLocalStorageReadBooks());
    }, [])

    useEffect(() => {
  let newData = [...saveData];
  if (sortingOptions.sortByPages && newData.length > 0) {
    let sorted = newData.sort((a, b) => b.totalPages - a.totalPages);
    setSaveData(sorted);
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // console.log(saveData);

    

    return (
        <div>
            { saveData.length > 0 ? saveData.map(data => <ReadBooksCard key={data.bookId} data={data}></ReadBooksCard>) : <h1 className="text-center bg-red-500 py-10 text-5xl font-bold rounded-3xl text-white">No books added in read books</h1>}
        </div>
    );
}

export default ReadBooks;