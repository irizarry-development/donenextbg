"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const _handleMenu = () => setIsMenuOpen(!isMenuOpen)  

    return (
        <header className="app-header">
          <section className="app-header-logo" />
          <nav className="app-navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <FaBars 
            className="app-menu-toggle"
            onClick={_handleMenu}
          />
        </header>
    )
}