import Sidebar from "../components/Sidebar";
import BookReadCard from "../components/BookReadCard.jsx";
import Profile from "../components/Profile.jsx";
import InputField from "../components/InputField.jsx";

const Reading = () => {
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <Sidebar/>
                    <div className={"p-5 col-sm-11"}>
                        <div className={"container d-flex align-items-center justify-content-between mb-4 p-0"}>
                            <div>
                                <h1>Library</h1>
                            </div>
                            <InputField buttonText={"search"}/>
                            <Profile/>
                        </div>
                        <div>
                            <h2 className={"display-6 fs-6 fw-bold"}>Books you read last</h2>
                            <div className={"mt-5 py-5 book-read-container"}>
                                <BookReadCard/>
                                <BookReadCard/>
                                <BookReadCard/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Reading;
