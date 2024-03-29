import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import CardDetails from './components/CardDetails/CardDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>, 
       },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader : () => fetch('../data.json')
      },
      {
        path:'/cardDetails/:id',
        element:<CardDetails></CardDetails>,
        loader : () => fetch('../data.json')    
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader : () => fetch('../data.json')
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
