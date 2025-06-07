import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToDb';
import Book from '../Books/Book';
const ViewTheList = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, allBooks, storedReadListInt);
        // filter multiple element
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    }, []);
    return (
        <div>
            <h3 className='text-2xl my-9'>listed Book : {readList.length}</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books Read</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ViewTheList;