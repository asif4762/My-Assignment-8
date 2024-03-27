import useBookData from "../Hooks/useBooksData";
import WantToBuyCard from "../WantToBuyCard/WantToBuyCard";

const WantToBuy = () => {

    const { bookData } = useBookData();

    return (
        <div className="max-w-6xl grid lg:grid-cols-3 mx-auto gap-4 mt-9">
            {
                bookData.map(book => <WantToBuyCard key={book.bookId} book={book}></WantToBuyCard>)
            }
        </div>
    );
};

export default WantToBuy;