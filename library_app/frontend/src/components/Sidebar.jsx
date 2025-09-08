import {Link} from "react-router";

const Sidebar = () => {
    return (
        <aside className={"col-sm-1"}>
            <div className="h-100 sidebar">
                <div className={"p-2 logo"}>
                    <img src="https://img.icons8.com/?size=100&id=11222&format=png&color=000000" alt={"Library"}
                         style={{width: "36px", height: "36px"}}/>
                </div>
                <nav className="d-flex flex-column justify-content-center nav-icons">
                    <Link className={"link"} to="/">
                        <i className={"fas fa-home icon-styling lime"}></i>
                    </Link>
                    <Link className={"link"} to="/reading">
                        <i className={"fas fa-book icon-styling lime"}></i>
                    </Link>
                    <Link className={"link"} to="/search">
                        <i className={"fas fa-search icon-styling lime"}></i>
                    </Link>
                    <Link className={"link"} to="/saved">
                        <i className={"fas fa-bookmark icon-styling lime"}></i>
                    </Link>
                </nav>
                <div className={"auth"}>
                    <p className={"link"}>
                        <i className={"fas fa-gear icon-styling"}></i>
                    </p>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;
