import React from "react";
import { Link } from "react-router-dom";
import chatIcon from "../assets/icons/message_icon.png";
import matchIcon from "../assets/icons/peer_match_icon.png";
import homeIcon from "../assets/icons/home_icon.png";
import journalIcon from "../assets/icons/journal_icon.png";
import calendarIcon from "../assets/icons/calendar_icon.png";

const NavBar = () => {
    return (
        <nav className="fixed bottom-0 w-full bg-primary p-3 flex justify-around">
            <Link to="/messages">
                <img src={chatIcon} alt="Messages" className="w-8 h-8 transition hover:opacity-70 hover:grayscale" />
            </Link>
            <Link to="/matching">
                <img src={matchIcon} alt="Match" className="w-8 h-8 transition hover:opacity-70 hover:grayscale" />
            </Link>
            <Link to="/">
                <img src={homeIcon} alt="Home" className="w-9 h-9 transition hover:opacity-70 hover:grayscale" />
            </Link>
            <Link to="/journal">
                <img src={journalIcon} alt="Journal" className="w-8 h-8 transition hover:opacity-70 hover:grayscale" />
            </Link>
            <Link to="/calendar">
                <img src={calendarIcon} alt="Calendar" className="w-8 h-8 transition hover:opacity-70 hover:grayscale" />
            </Link>
        </nav>
    );
};

export default NavBar;
