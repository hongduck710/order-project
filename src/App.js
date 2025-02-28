
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import './App.css';
import UserList from "./components/UserList";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";

import BooksPage from "./pages/BooksPage";
import BookDetail from "./pages/BookDetail";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UserList />} /> 
        <Route 
        path="/books/:id" 
        element={<BookDetail />} 
        />
        <Route path="/books" element={<BooksPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router= {router} />
    </>
  );
}

export default App;
