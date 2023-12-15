import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo">
                <h2>CryptoVerse</h2>
            </div>
            <Link to="/"><i className="fa-solid fa-server"></i>
                Dashboard
            </Link>
            <Link to="/exchanges">
                <i className="fa-solid fa-chart-line"></i>Exchanges
            </Link>
        </aside>
    );
}

export default Sidebar;