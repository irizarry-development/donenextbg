import Link from "next/link";
import { Fragment } from "react";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { NAV_LINKS } from "~/app/app.config";
import FooterContainer from "~/components/ui/FooterContainer";

export default function Footer() {

    const _renderFooterLinks = () => {
        return NAV_LINKS.map((link, index) => (
            <Fragment key={index + "fragment"}>
                <Link href={link.href} key={index} className="app-footer-sitemap-link">
                    {link.text}
                </Link>

                {link.subnav && (
                    <ul key={index + "subnav"} className="app-footer-sitemap-subnav">
                        {link.subnav.map((sublink, subindex) => (
                            <li key={subindex}>
                                <Link href={sublink.href} key={subindex + "link"} className="app-footer-sitemap-sublink">
                                    {sublink.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </Fragment>
        ))
    }

    return (
        <footer className="app-footer">
            <img src="/footerwaves.svg" className="app-footer-wave" />
            <section className="app-footer-content">

                <FooterContainer title="Sitemap">
                    <nav className="app-footer-sitemap">
                        {_renderFooterLinks()}
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