import { toast } from 'react-toastify';
export const saveToLocalStorageBookCart = (data) => {
    const saveData = JSON.parse(localStorage.getItem('BookCart')) || [];

    const existedInReadBook = saveData.find((item) => item.bookId == data.bookId);
    
    if (!existedInReadBook)
    {
        saveData.push(data);
        localStorage.setItem('BookCart', JSON.stringify(saveData));
        toast.success('Book is added to your cart');
    }
    else {
        toast.warning('Book is already added to your list');
    }
}

export const deleteFromLocalStorageBookCart = (data) => {
    const saveData = JSON.parse(localStorage.getItem('BookCart')) || [];
    const updatedData = saveData.filter(item => item.bookId !== data.bookId);
    localStorage.setItem('BookCart', JSON.stringify(updatedData));
}


export const getFromLocalStorageBookCart = () => {
    const data = JSON.parse(localStorage.getItem('BookCart')) || [];
    return data;
}