import "./Header.scss";
import "../../_globalParams.scss";
import {
    greeting,
    talkSection,
    achievementSection,
    currentProjectsSection,
    releasesSection,
} from "../../portfolio";
import { useEffect, useState } from "react";

const Header = () => {
    const menuItems = [
        releasesSection.display && { id: "releases", label: "Releases" },
        currentProjectsSection.display && { id: "projects", label: "Projects" },
        achievementSection.display && { id: "achievements", label: "Achievements" },
        talkSection.display && { id: "talks", label: "Talks" },
        { id: "contact", label: "Contact Me" },
    ].filter(Boolean); // remove false/null items

    const [menuOpen, setMenuOpen] = useState(false);

    // Update scroll offset based on menu state and number of items
    useEffect(() => {
        const defaultOffset = 100;
        const perItemHeight = 45; // pixels per item
        const offset = menuOpen ? 100 + menuItems.length * perItemHeight : defaultOffset + perItemHeight;
        document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    }, [menuOpen, menuItems.length]);
 
    return (
        <header className="header">
            <a href="/" className="logo">
                <span className="logo-accents"> &lt;</span>
                <span className="logo-name">{greeting.username}</span>
                <span className="logo-accents">/&gt;</span>
            </a>

            <input
                className="menu-btn"
                type="checkbox"
                id="menu-btn"
                checked={menuOpen}
                onChange={(e) => setMenuOpen(e.target.checked)}
            />
            <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
                <span className="navicon"></span>
            </label>

            <ul className="menu">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
