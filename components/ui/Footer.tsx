import Link from "next/link";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import FooterContainer from "~/components/ui/FooterContainer";

export default function Footer() {
    return (
        <footer className="app-footer">
            <img src="/footerwaves.svg" className="app-footer-wave" />
            <section className="app-footer-content">

                <FooterContainer title="Sitemap">
                    <nav className="app-footer-sitemap">
                        <Link href="/" className="app-footer-sitemap-link">
                            Home
                        </Link>
                        <Link href="/about" className="app-footer-sitemap-link">
                            About
                        </Link>
                        <Link href="/services" className="app-footer-sitemap-link">
                            Services
                        </Link>
                        <ul className="app-footer-sitemap-subnav">
                            <li>
                                <Link href="/services/interior" className="app-footer-sitemap-sublink">
                                    Interior Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/remodel" className="app-footer-sitemap-sublink">
                                    Remodel
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/painting" className="app-footer-sitemap-sublink">
                                    Painting
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/demo" className="app-footer-sitemap-sublink">
                                    Demolition
                                </Link>
                            </li>
                        </ul>
                        <Link href="/contact" className="app-footer-sitemap-link">
                            Contact
                        </Link>
                    </nav>
                </FooterContainer>

                <FooterContainer title="Socials">
                    <section className="app-footer-socials">
                        <a href="https://facebook.com" className="app-footer-socials-link">
                            <FaFacebook className="app-footer-social-icon" /> Facebook
                        </a>
                        <a href="https://instagram.com" className="app-footer-socials-link">
                            <FaInstagram className="app-footer-social-icon" /> Instagram
                        </a>
                    </section>
                </FooterContainer>

                <FooterContainer title="Contact Us">
                    <section className="app-footer-contact">
                        <a href="tel:555-555-5555" className="app-footer-contact-link">
                            <FaPhone className="app-footer-contact-icon" /> 555-555-5555
                        </a>
                        <a href="mailto:hello@email.com " className="app-footer-contact-link">
                            <FaEnvelope className="app-footer-contact-icon" /> hello@email.com
                        </a>
                    </section>
                </FooterContainer>

                <FooterContainer>
                    <p className="app-footer-copyright">
                        &copy; 2024 DoneNextBg
                    </p>
                    <p className="app-footer-credit">
                        Made with ❤️ by <a href="https://irizarry.dev">Irizarry.dev</a>
                    </p>
                </FooterContainer>

            </section>
        </footer>
    )
}