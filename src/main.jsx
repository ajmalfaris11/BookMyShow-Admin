// Importing the StrictMode component from React to enable additional checks during development
import { StrictMode } from 'react'

// Importing createRoot method from 'react-dom/client' to render the root component
import { createRoot } from 'react-dom/client'

// Importing global styles from index.css
import './index.css'

// Importing the App component (although it's not being used in this code yet)
import App from './App.jsx'

// Importing React Router components to handle routing
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Creating a browser router with a simple route configuration
const router = createBrowserRouter([
  {
    path: "/", // The root path of the application
    element: <div>Hello world!</div>, // Rendering a simple "Hello world!" element for this route
  },
]);

// Rendering the application inside the root DOM element with the RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Providing the router to the app via RouterProvider */}
    <RouterProvider router={router} />
  </StrictMode>,
)
