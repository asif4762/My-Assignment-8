import {  toast } from 'react-toastify';

export const saveToLocalStorageWishlist = (data) => {
    const saveDataWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const saveDataReadBooks = JSON.parse(localStorage.getItem('ReadBook'));

    let isExistedInReadList = saveDataReadBooks && saveDataReadBooks.find(read => read.bookId === data.bookId);
    let isExistedInWishlist = saveDataWishlist && saveDataWishlist.find(wish => wish.bookId === data.bookId);

    if (!isExistedInWishlist && !isExistedInReadList) {
        saveDataWishlist.push(data);
        localStorage.setItem('wishlist', JSON.stringify(saveDataWishlist));
        toast.success('Book is Added to Wishlist');
    } else {
        if (isExistedInReadList) {
            toast.warning('Already readed this book');
        } else if (isExistedInWishlist) {
            toast.warning('Already added to wishlist');
        }
    }
}

export const getFromLocalStorageWishlist = () => {
    const data = JSON.parse(localStorage.getItem('wishlist')) || [];
    return data;
}
