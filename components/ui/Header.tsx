"use client";

import { useState } from "react";
import { FaBars, FaCircleInfo, FaHouse, FaPhone } from "react-icons/fa6";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const _handleMenu = () => setIsMenuOpen(!isMenuOpen)  

    return (
        <header className="app-header">
          <section className="app-header-logo" />
          <nav className={`app-navigation ${isMenuOpen && 'open'}`}>
            <section className="app-navigation-content">
              <a className="app-navigation-link" href="/">Home <FaHouse /></a>
              <a className="app-navigation-link" href="/about">About <FaCircleInfo /></a>
              <a className="app-navigation-link" href="/contact">Contact <FaPhone /></a>
            </section>
          </nav>
          <FaBars 
            className="app-menu-toggle"
            onClick={_handleMenu}
          />
        </header>
    )
}