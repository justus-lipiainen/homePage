import Navbar from "../components.jsx/navbar";

function Home() {
    return (
        <div id="portfolio">
            <h1>Home Page</h1>
            <div id="project1" className="infoBox">
                <p className="title">Otsikko</p>
                <p className="paragraph">Teksti</p>
            </div>
            <div id="project2" className="infoBox">
                <p className="title">Otsikko</p>
                <p className="paragraph">Teksti</p>
            </div>
            <div id="project3" className="infoBox">
                <p className="title">Otsikko</p>
                <p className="paragraph">Teksti</p>
            </div>
        </div>
    )
}

export default Home