import React from 'react';

function BookReadCard({book}) {
    return (
        <div className={"container book-read-card shadow-lg lime-gradient rounded-4"}>
            <div className={"row h-100"}>
                <div className={"col-4 h-100 p-0 image-container"}>
                    <img className={"shadow-lg rounded-3"}
                         src={book.image_url_l}
                         alt={book.book_title}/>
                </div>
                <div className={"p-4 col-8 d-flex flex-column justify-content-end text-white"}>
                    <h2 className={"fs-6 mb-0 fw-bold line-1"}>{book.book_title}</h2>
                    <div>
                        <p className={"mb-0 fs-7 text-secondary"}>{book.year_of_publication}</p>
                        <p className={"mb-0 fs-7"}>{book.book_author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookReadCard;