import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero.jsx";

function Home() {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <Sidebar/>
                <Hero/>
            </div>
        </div>

    );
}

export default Home;
