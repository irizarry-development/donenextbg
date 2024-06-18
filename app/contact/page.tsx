import { Fragment } from "react";
import Jumbotron from "~/components/containers/Jumbotron";
import WaveContainer from "~/components/containers/WaveContainer";
import Container from "~/components/containers/Container";
import Form from "~/components/ui/Form";
import Input from "~/components/ui/Input";
import Button from "~/components/ui/Button";

export default function ContactPage() {
    return (
        <Fragment>
            <Jumbotron
                titleOne="Contact"
                titleTwo="Us"
                displayForm={false}
                titleOnly
            />
            <WaveContainer>
                <section className="contact-page-buttons">
                    <a href={``}>
                        
                    </a>
                </section>
            </WaveContainer>
            <Container
                title="Ready to Get Started?"
                subtitle="Contact us today to get started on your next project."
            >
                <Form
                    formTitle=""
                >
                    <Input 
                        placeholder="Enter your name"
                        id="name"
                        type="text"
                    />
                    <Input 
                        placeholder="Enter your email"
                        id="email"
                        type="email"
                    />
                    <Input 
                        placeholder="Enter your phone number"
                        id="phone"
                        type="tel"
                    />
                    <Input 
                        placeholder="Enter your project type"
                        id="project-type"
                        type="select"
                        label="Select your project type"
                        options={["Interior Painting", "Exterior Painting", "Carpentry", "Other"]}
                    />
                    <Input 
                        placeholder="Enter your project details"
                        id="project-details"
                        type="multiline"
                    />
                    <Button
                        text="Submit"
                        size="large"
                        color="primary"
                    />
                </Form>
            </Container>
        </Fragment>
    )
}