import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../Utility/AddToDb';
import Book from '../Books/Book';

const ViewTheList = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList().map(id => parseInt(id));
        const storedWishList = getStoredWishList().map(id => parseInt(id));

        const readBooks = allBooks.filter(book => storedReadList.includes(book.bookId));
        const wishBooks = allBooks.filter(book => storedWishList.includes(book.bookId));

        setReadList(readBooks);
        setWishList(wishBooks);
    }, [allBooks]);

    return (
        <div className='p-4'>
            <h3 className='text-2xl my-9'>Total Listed Books: {readList.length + wishList.length}</h3>
            <Tabs>
                <TabList className='mb-5'>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-xl mb-4'>Books You've Read</h2>
                    {
                        readList.length > 0 ? (
                            readList.map(book => <Book key={book.bookId} book={book} />)
                        ) : (
                            <p>No books in the read list.</p>
                        )
                    }
                </TabPanel>

                <TabPanel>
                    <h2 className='text-xl mb-4'>Books You Wish to Read</h2>
                    {
                        wishList.length > 0 ? (
                            wishList.map(book => <Book key={book.bookId} book={book} />)
                        ) : (
                            <p>No books in the wish list.</p>
                        )
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ViewTheList;
