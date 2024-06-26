import { Fragment } from "react";
import Container from "~/components/containers/Container";
import Jumbotron from "~/components/containers/Jumbotron";
import WaveContainer from "~/components/containers/WaveContainer";
import CardMasonry from "~/components/ui/CardMasonry";
import Carousel from "~/components/carousel/Carousel";
import Button from "~/components/ui/Button";
import Card from "~/components/ui/Card";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER, JUMBOTRON_BUTTON_HREF, JUMBOTRON_BUTTON_TEXT, JUMBOTRON_TEXT, SERVICE_CARDS } from "~/app/app.config";

export default function Home() {
  return (
    <Fragment>

      <Jumbotron
        titleOne="DONE."
        titleTwo="NEXT."
        jumbotronText={JUMBOTRON_TEXT}
        jumbotronButtonText={JUMBOTRON_BUTTON_TEXT}
        jumbotronButtonHref={JUMBOTRON_BUTTON_HREF}
        displayForm
      />
      <WaveContainer
        title="Our Services"
        subtitle="We offer a wide variety of services to help you get your house looking its best."
      >
        <CardMasonry>
          {SERVICE_CARDS.map((card, index) => <Card key={index} {...card} />)}
        </CardMasonry>
      </WaveContainer>
      <Container
        title="Our Work"
        subtitle="Check out some of our work to see what we can do for you."
        alignment="left"
      >
        <Carousel />
      </Container>
      <WaveContainer
        title="Our Process"
        subtitle="Our process is simple and effective. We work with you to ensure that your house is looking its best."
        image="ourprocess.jpeg"
        alignment="right"
      >
        <Button text="Learn About Us" href="/about" size="large" color="secondary" />
      </WaveContainer>
      <Container
        title="Done. Next?"
        subtitle="Contact us today to get started on your next project."
        image="contactus.jpeg"
        alignment="left"
      >
        <section className="contact-methods">
          <Button
            text="Call Us"
            href={`tel:${CONTACT_PHONE_NUMBER}`}
            size="large"
            color="primary"
          />
          <Button
            text="Email Us"
            href={`mailto:${CONTACT_EMAIL}`}
            size="large"
            color="secondary"
          />
        </section>
      </Container>
    </Fragment>
  )
}
