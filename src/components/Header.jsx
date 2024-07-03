import React from "react";

const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">
                        portfolio<em>vite</em>
                    </a>
                </div>
                <nav
                    className="header__nav"
                    role="navigation"
                    aria-label="Main Menu"
                >
                    <ul>
                        <li>
                            <a href="#intro">intro</a>
                        </li>
                        <li>
                            <a href="#skill">skill</a>
                        </li>
                        <li>
                            <a href="#site">site</a>
                        </li>
                        <li>
                            <a href="#port">portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
