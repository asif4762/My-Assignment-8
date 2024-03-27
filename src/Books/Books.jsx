import Book from "../Book/Book";
import useBookData from "../Hooks/useBooksData";


const Books = () => {

    const { bookData } = useBookData();
    // console.log(bookData);
    return (

        

        <div className="mt-24 max-w-6xl mx-auto">
            <h1 className="text-center font-bold text-4xl mb-9">Books</h1>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                bookData.map(data => <Book key={data.id} data={data}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;