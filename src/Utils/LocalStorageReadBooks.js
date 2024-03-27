import { toast } from 'react-toastify';
export const saveToLocalStorageReadBooks = (data) => {
    const saveData = JSON.parse(localStorage.getItem('ReadBook')) || [];

    const existedInReadBook = saveData.find((item) => item.bookId == data.bookId);
    
    if (!existedInReadBook)
    {
        saveData.push(data);
        localStorage.setItem('ReadBook', JSON.stringify(saveData));
        toast.success('Book is added to list');
    }
    else {
        toast.warning('Book is already added to list');
    }
}

export const getFromLocalStorageReadBooks = () => {
    const data = JSON.parse(localStorage.getItem('ReadBook')) || [];
    return data;
}