import React from "react";
import { headerNav } from "../constants";

const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">
                        Hyungjun Doh<em>Portfolio</em>
                    </a>
                </div>
                <nav
                    className="header__nav"
                    role="navigation"
                    aria-label="Main Menu"
                >
                    <ul>
                        {headerNav.map((item, key) => (
                            <li key={key}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/*<div
                    className="header__nav_mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    role="button"
                    tabindex="0"
                >
                    <span></span>
                </div>*/}
            </div>
        </header>
    );
};

export default Header;
