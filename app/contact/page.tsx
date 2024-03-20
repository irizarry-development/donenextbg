import { FaEnvelopeCircleCheck, FaPhoneFlip } from "react-icons/fa6";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER } from "../app.config";



export default function ContactPage() {
    return (
        <section className="contact-page">
            <section className="contact-details">
                <h1>Contact Us</h1>
                <p>Get in touch with us today to get started on your next project.</p>
                <section className="contact-methods">
                    <a href={`tel:${CONTACT_PHONE_NUMBER}`} className="contact-method">
                        <FaPhoneFlip />
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="contact-method">
                        <FaEnvelopeCircleCheck />
                    </a>
                </section>
            </section>
        </section>
    )
}