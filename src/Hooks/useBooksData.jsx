import { useEffect, useState } from "react";

const useBookData = () => {
    const [ bookData, setBookData ] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
        .then(data =>setBookData(data))
    }, [])

    return {bookData, setBookData}
}

export default useBookData;

