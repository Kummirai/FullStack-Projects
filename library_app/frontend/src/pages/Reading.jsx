import Sidebar from "../components/Sidebar";
import BookReadCard from "../components/BookReadCard.jsx";
import Profile from "../components/Profile.jsx";
import InputField from "../components/InputField.jsx";
import BookCard from "../components/BookCard.jsx";
import AuthorCard from "../components/AuthorCard.jsx";
import {useContext} from "react";
import BooksContext from "../context/Context.jsx";

const Reading = () => {

    const { books, authors} = useContext( BooksContext);
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <Sidebar/>
                    <div className={"p-4 d-flex flex-column justify-content-between col-sm-11"}>
                        <div className={"container d-flex align-items-center justify-content-between p-0"}>
                            <div>
                                <h1>Library</h1>
                            </div>
                            <InputField buttonText={"search"}/>
                            <Profile/>
                        </div>
                        <div>
                            <h2 className={"display-6 fs-6 fw-bold"}>Books you read last</h2>
                            <div className={"mt-5 py-5 book-read-container"}>
                                {books.map((book, index) => (
                                    index > 13 && index < 17 ?
                                    <BookReadCard key={book._id} book={book}/>
                                        : ""
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className={"display-6 fs-6 fw-bold"}>Suggested books</h2>
                            <div className={"row"}>
                                <div className={"col-9 book-card-container mt-2"}>
                                    {books.map((book, index) => (
                                        index < 5?
                                            <BookCard book={book} key={book._id}/>
                                            : ""
                                    ))}
                                </div>
                                <div className={"col-3 p-2"}>
                                    <h2 className={"display-6 fs-7 fw-bold mb-2"}>Popular Authors</h2>
                                    <div className={"d-flex flex-column"}>
                                        {authors.map((author, index) => (
                                            <AuthorCard key={index} author={author}/>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Reading;
