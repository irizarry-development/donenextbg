import { Fragment } from "react";
import Container from "~/components/containers/Container";
import Jumbotron from "~/components/containers/Jumbotron";
import WaveContainer from "~/components/containers/WaveContainer";
import CardMasonry from "~/components/ui/CardMasonry";

import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import Carousel from "~/components/carousel/Carousel";
import Button from "~/components/ui/Button";
import Card from "~/components/ui/Card";

export default function Home() {
  return (
    <Fragment>
      <Jumbotron /> 
      <WaveContainer
        title="Our Services"
        subtitle="We offer a wide variety of services to help you get your house looking its best."
      >
        <CardMasonry>
            <Card 
                title="Interior Design"
                description="From picture hanging to furniture arrangement, we can help you get your house looking its best."
                image="interiordesign.svg"
            />
            <Card 
                title="Remodel"
                description="Want to freshen things up? Hire us for your next remodel project, big or small."
                image="remodel.svg"
            />
            <Card 
                title="Painting"
                description="We can help you with your next painting project. From walls to cabinets, we have you covered."
                image="painting.svg"
            />
            <Card
                title="Demolition"
                description="Time for a fresh start? Our team of experts can help you with your next demo project."
                image="demo.svg"
            />
        </CardMasonry>
        <Button 
          text="Get Started" 
          href="/services" 
          size="large"
          color="primary"
        />
        <Button
          text="Learn More"
          href="/services"
          size="large"
          color="secondary"
        />
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
          <Button
            text="Call Us"
            href="tel:123-456-7890"
            size="large"
            color="primary"
          />
          <Button
            text="Email Us"
            href="mailto:test@irizarry.dev"
            size="large"
            color="secondary"
          />
        </section>
      </Container>
    </Fragment>
  )
}
