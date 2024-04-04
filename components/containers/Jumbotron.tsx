"use client";

import axios from "axios";
import { JUMBOTRON_BUTTON_HREF, JUMBOTRON_BUTTON_TEXT, JUMBOTRON_TEXT } from "~/app/app.config";
import Button from "~/components/ui/Button";
import Form from "~/components/ui/Form";
import Input from "~/components/ui/Input";

export default function Jumbotron() {

    async function submitForm(formData: FormData) {
        
        const submission = {
            email: formData.get("email"),
            name: formData.get("name"),
            phone: formData.get("phone"),
            projectType: formData.get("project-type"),
            projectDetails: formData.get("project-details"),
            legalConsent: formData.get("legal-consent")
        }

        try {
            await axios.post("/api/v1/contact-form", submission)

            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="jumbotron">
            <section className="jumbotron-content">
                <h1>Done.</h1>
                <h1>Next.</h1>
                <p>{JUMBOTRON_TEXT}</p>
                <Button
                    text={JUMBOTRON_BUTTON_TEXT}
                    href={JUMBOTRON_BUTTON_HREF}
                    size="large"
                    color="primary"
                />
            </section>
            <Form
                formTitle="Get Started"
                cssSelector="jumbotron-form"
                handler={submitForm}
            >
                <Input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                />

                <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                />

                <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    type="tel"
                />

                <Input
                    id="project-type"
                    placeholder="Enter your project type"
                    type="select"
                    label="Select your project type"
                    options={["Interior Painting", "Exterior Painting", "Carpentry", "Other"]}
                />

                <Input
                    id="project-details"
                    placeholder="Enter your project details"
                    type="multiline"
                />
                <Input
                    id="legal-consent"
                    type="checkbox"
                    label="I agree to allow DoneNextBG to store and use data submitted by this form to contact me."
                    placeholder=""
                />
                <Button
                    text="Request Quote"
                    size="large"
                    color="secondary"
                />

            </Form>
        </section>
    )
}