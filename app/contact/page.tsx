import { FaEnvelopeCircleCheck, FaPhoneFlip } from "react-icons/fa6";



export default function ContactPage() {
    return (
        <section className="contact-page">
            <section className="contact-details">
                <h1>Contact Us</h1>
                <p>Get in touch with us today to get started on your next project.</p>
                <section className="contact-methods">
                    <a href="tel:123-456-7890" className="contact-method">
                        <FaPhoneFlip />
                    </a>
                    <a href="mailto:hello@test.com">
                        <FaEnvelopeCircleCheck />
                    </a>
                </section>
            </section>
        </section>
    )
}