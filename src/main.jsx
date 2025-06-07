import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/HomePage/Home';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/LoginPage/LoginPage';
import BookDetails from './components/BookDetails/BookDetails';
import Contact from './components/ContactPage/Contact';
import Service from './components/ServicePage/Service';
import ViewTheList from './components/ViewTheList/ViewTheList';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'books/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'viewthelist',
        element: <ViewTheList />,
        loader: () => fetch('/booksData.json'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  </StrictMode>
);
