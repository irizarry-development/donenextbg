"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaCircleInfo, FaHouse, FaListCheck, FaMapLocationDot, FaPhone } from "react-icons/fa6";

interface NavLink {
    readonly text: string;
    readonly href: string;
    readonly component: JSX.Element;
}

const NAV_LINKS: NavLink[] = [
    { text: 'Home', href: '/', component: <FaHouse />},
    { text: 'About', href: '/about', component: <FaCircleInfo />},
    { text: 'Services', href: '/services', component: <FaListCheck />},
    { text: 'Coverage Area', href: '/coverage', component: <FaMapLocationDot />},
    { text: 'Contact', href: '/contact', component: <FaPhone />}
]

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const _handleMenu = () => setIsMenuOpen(!isMenuOpen)  

    return (
        <header className="app-header">
          <section className="app-header-logo" />
          <nav className={`app-navigation ${isMenuOpen && 'open'}`}>
            <section className="app-navigation-content">
              {NAV_LINKS.map((link, index) => <Link onClick={_handleMenu} href={link.href} key={index} className="app-navigation-link">{link.text} {link.component}</Link>)}
            </section>
          </nav>
          <FaBars 
            className="app-menu-toggle"
            onClick={_handleMenu}
          />
        </header>
    )
}