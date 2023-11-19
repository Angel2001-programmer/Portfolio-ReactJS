import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactMe from './pages/contactme';
import Error from './pages/error';
import WebDevelopmentPDF from './components/WebDevelopmentPDF/WebDevelopmentPDF';

const router = createBrowserRouter([
  {
  path: "/Portfolio-ReactJS", 
  element: <App/>,
},
{
  path: "/contactme", 
  element: <ContactMe/>,
},
{
  path: "/WebDevelopmentPDF", 
  element: <WebDevelopmentPDF/>
},
{
  path: "*", 
  element: <Error/>
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
