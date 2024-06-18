import Link from "next/link";
import { Fragment } from "react";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, NAV_LINKS } from "~/app/app.config";
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
                        <a href={FACEBOOK_URL} className="app-footer-socials-link">
                            <FaFacebook className="app-footer-social-icon" /> Facebook
                        </a>
                        <a href={INSTAGRAM_URL} className="app-footer-socials-link">
                            <FaInstagram className="app-footer-social-icon" /> Instagram
                        </a>
                    </section>
                </FooterContainer>

                <FooterContainer title="Contact Us">
                    <section className="app-footer-contact">
                        <a href={`tel:${CONTACT_PHONE_NUMBER}`} className="app-footer-contact-link">
                            <FaPhone className="app-footer-contact-icon" />{CONTACT_PHONE_NUMBER}
                        </a>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="app-footer-contact-link">
                            <FaEnvelope className="app-footer-contact-icon" />{CONTACT_EMAIL}
                        </a>
                    </section>
                </FooterContainer>

                <FooterContainer>
                    <p className="app-footer-copyright">
                        &copy; { new Date().getFullYear() } {COMPANY_NAME}
                    </p>
                    <p className="app-footer-credit">
                        Made with ❤️ by <a href="https://irizarry.dev">Irizarry.dev</a>
                    </p>
                </FooterContainer>

            </section>
        </footer>
    )
}