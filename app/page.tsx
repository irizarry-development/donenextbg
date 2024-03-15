import { Fragment } from "react";
import Container from "~/components/containers/Container";
import Jumbotron from "~/components/containers/Jumbotron";
import WaveContainer from "~/components/containers/WaveContainer";
import CardMasonry from "~/components/ui/CardMasonry";

import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import Carousel from "~/components/carousel/Carousel";

export default function Home() {
  return (
    <Fragment>
      <Jumbotron /> 
      <WaveContainer
        title="Our Services"
        subtitle="We offer a wide variety of services to help you get your house looking its best."
      >
        <CardMasonry />
      </WaveContainer>
      <Container
        title="Our Process"
        subtitle="Our process is simple and effective. We work with you to ensure that your house is looking its best."
        image="worktogether.svg"
      />
      <WaveContainer
        title="Our Work"
        subtitle="Check out some of our work to see what we can do for you."
      >
        <Carousel />
      </WaveContainer>
      <Container
        title="Contact Us"
        subtitle="Contact us today to get started on your next project."
        image="contactus.svg"
      >
        <section className="contact-methods">
          <a href="tel:123-456-7890" className="contact-method">
            <FaPhoneFlip />
          </a>
          <a href="mailto:test@irizarry.dev" className="contact-method">
            <FaEnvelopeCircleCheck />
          </a>
        </section>
      </Container>
    </Fragment>
  )
}
