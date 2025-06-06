import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Home", path: "/" },
    {
        name: "About",
        subMenu: [
            { name: "Contact", path: "/contact" },
            { name: "Service", path: "/service" },
        ],
    },
    { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
    const activeClass = ({ isActive }) =>
        isActive ? "text-primary font-semibold" : "";

    return (
        <div className="navbar bg-base-100 shadow-sm mb-10 p-5 rounded-xl">
            {/* Navbar Start (Mobile Menu) */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems.map((item, index) =>
                            item.subMenu ? (
                                <li key={index} tabIndex={0}>
                                    <details>
                                        <summary>{item.name}</summary>
                                        <ul className="p-2">
                                            {item.subMenu.map((sub, idx) => (
                                                <li key={idx}>
                                                    <NavLink to={sub.path} className={activeClass}>
                                                        {sub.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            ) : (
                                <li key={index}>
                                    <NavLink to={item.path} className={activeClass}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl">Bookish</NavLink>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item, index) =>
                        item.subMenu ? (
                            <li key={index}>
                                <details>
                                    <summary>{item.name}</summary>
                                    <ul className="p-2">
                                        {item.subMenu.map((sub, idx) => (
                                            <li key={idx}>
                                                <NavLink to={sub.path} className={activeClass}>
                                                    {sub.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={index}>
                                <NavLink to={item.path} className={activeClass}>
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <NavLink to="/login" className="btn">Log In</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
