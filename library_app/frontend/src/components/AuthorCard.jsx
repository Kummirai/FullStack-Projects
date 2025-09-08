
function AuthorCard({author}) {

    return (
        <div className="author-card shadow-lg p-2 rounded-4 mb-2">
            <div className="author-image">
                <img
                    src="https://thelightcommittee.com/wp-content/uploads/elementor/thumbs/studio-business-headshot-of-a-black-man-in-Los-Angeles-r42uipeyz48g590yz1bhrtos4flfu3q2tuzohhy7f4.jpg"
                    alt=""
                    className="img-fluid shadow-lg"
                />
            </div>
            <div className="author-details">
                <h2 className={"fs-7 fw-bold mb-0"}>{author._id}</h2>
                <p className={"fs-8"}>{author.count} books</p>
            </div>
        </div>
    );
}

export default AuthorCard;