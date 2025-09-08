import React from 'react';

function BookReadCard() {
    return (
        <div className={"container book-read-card shadow-lg lime-gradient rounded-4"}>
            <div className={"row h-100"}>
                <div className={"col-4 h-100 p-0 image-container"}>
                    <img className={"img-fluid shadow-lg rounded-4"}
                         src="https://www.gutenberg.org/files/143/143-h/images/cover.jpg"
                         alt=""/>
                </div>
                <div className={"p-5 col-8 d-flex flex-column justify-content-end text-white"}>
                    <h2 className={"fs-6 mb-0 fw-bold"}>Mayor of Caster bridge</h2>
                    <div>
                        <p className={"mb-0 fs-7 text-secondary"}>2012</p>
                        <p className={"mb-0 fs-7"}>Thomas Hardy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookReadCard;