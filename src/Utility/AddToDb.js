// Read List
const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
    } else {
        console.log('Already in read list:', id);
    }
};

// Wish List
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedList));
    } else {
        console.log('Already in wish list:', id);
    }
};

export {
    getStoredReadList,
    addToStoredReadList,
    getStoredWishList,
    addToStoredWishList
};
