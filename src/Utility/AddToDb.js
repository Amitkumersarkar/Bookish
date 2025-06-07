import { toast } from 'react-toastify';

// Read List
const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast.success('✅ Book added to Read List!', {
            position: 'top-center',
            autoClose: 2500,
            theme: 'colored'
        });
    } else {
        toast.info('ℹ️ Book is already in the Read List.', {
            position: 'top-center',
            autoClose: 2000,
            theme: 'light'
        });
    }
};

// Wish List
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedList));
        toast.success('💖 Book added to Wishlist!', {
            position: 'top-center',
            autoClose: 2500,
            theme: 'colored'
        });
    } else {
        toast.info('📌 Already in Wishlist.', {
            position: 'top-center',
            autoClose: 2000,
            theme: 'light'
        });
    }
};

export {
    getStoredReadList,
    addToStoredReadList,
    getStoredWishList,
    addToStoredWishList
};
