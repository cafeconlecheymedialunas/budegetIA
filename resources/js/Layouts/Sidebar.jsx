import { Link } from "@inertiajs/react";

export default function Sidebar(props) {
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">AdminKit</span>
                </a>
                <ul className="sidebar-nav">
                 
                    <li className="sidebar-item">
                        <Link href="/clients" className="sidebar-link">
                            <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Clients</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" href="teams">
                            <i className="align-middle" data-feather="user" /> <span className="align-middle">Teams</span>
                        </Link>
                    </li>
                   
                 
                </ul>
            </div>
        </nav>
    )
}