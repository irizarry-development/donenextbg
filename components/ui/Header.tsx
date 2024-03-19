"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { NAV_LINKS } from "~/app/app.config";

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