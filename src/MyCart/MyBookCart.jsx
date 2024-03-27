import { deleteFromLocalStorageBookCart } from "../Utils/LocalStorageBookCart";

const MyBookCart = ({ book }) => {
  const { image, bookName, price, author } = book;

    const handleDelete = (data) => {
        deleteFromLocalStorageBookCart(data);
    }
    
  return (
      <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl mt-6">
          <figure>
            <img src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <p>by : {author}</p>
            <p>Price : {price}</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                buy
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">You Successfully bought the book</h3>
                  <p className="py-4">Thanks For Buying</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button onClick={() => handleDelete(book) } className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookCart;
