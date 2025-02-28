
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import './App.css';
import UserList from "./components/UserList";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Books from "./components/Books";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UserList />} /> 
        <Route path="/books" element={<Books />} />
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
