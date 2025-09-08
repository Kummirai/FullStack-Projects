import React from 'react';

function BookCard({book}) {
    return (
        <div className="book-card">
            <div className="book-card-image mb-1">
                <img className={"img-fluid rounded-4 shadow-lg"}
                     src={book.image_url_l} alt={book.book_title}/>
            </div>
            <div className="book-card-content p-1">
                <h2 className={"fs-7 mb-1 fw-bold line-1"}>{book.book_title}</h2>
                <p className={"fs-8"}>{book.book_author}</p>
            </div>
        </div>
    );
}

export default BookCard;