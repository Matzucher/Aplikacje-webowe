import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
    return <>
        <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Pizzeria</Link>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Katalog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Dodaj</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
        <Footer />
    </>
}