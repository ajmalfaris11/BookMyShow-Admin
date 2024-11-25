// Importing React Router components to handle routing
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/root';
import ErrorPage from './error-page';
import AdMv from './routes/movie-routes/adMv';
import Home from './routes/home';
import DlMv from './routes/movie-routes/dlMv';
import Movies from './routes/movie-routes/movies';
import AllMovies, {loader as moviesLoader} from './routes/movie-routes/allMovie';

// Creating a browser router with proper route configuration
const router = createBrowserRouter([
  {
    path: "/", // The root path of the application
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/", // Root-level Home route
        element: <Home />,
      },
      {
        path: "/movies", // Parent route for adding movies
        element: <Movies />,
        children: [

          {
            path: "/movies",
            element: <AllMovies/>,
            loader: moviesLoader
          },

          {
            path: "/movies/admv", // Nested route under /add-movie
            element: <AdMv />,
          },

          {
            path: "/movies/dlMv", // Nested route under /add-movie
            element: <DlMv />,
          },
        ],
      },
    ],
  },
]);

// Rendering the application inside the root DOM element with the RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
