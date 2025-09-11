import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Reading from "./pages/Reading";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import {useEffect, useState} from "react";
import  BooksContext from "./context/Context.jsx";

function App() {

    const [fiveBooks , setFiveBooks] = useState([]);
    const [authors, setAuthors] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await fetch("http://localhost:3000");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setFiveBooks(data.books);
            setAuthors(data.authors);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const context = {
        fiveBooks,
        authors,
    }




    useEffect(() => {
        fetchBooks()
    }, [])

  return (
    <BooksContext.Provider value={context}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/reading"} element={<Reading />} />
                <Route path={"/search"} element={<Search />} />
                <Route path={"/saved"} element={<Saved />} />
            </Routes>
        </BrowserRouter>
    </BooksContext.Provider>

  );
}

export default App;
