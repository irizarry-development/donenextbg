"use client";

import axios from "axios";
import Button from "~/components/ui/Button";
import Form from "~/components/ui/Form";
import Input from "~/components/ui/Input";

interface JumbotronProps {
    titleOne: string
    titleTwo: string
    jumbotronText?: string
    jumbotronButtonText?: string
    jumbotronButtonHref?: string
    displayForm: boolean
    titleOnly?: boolean
}

export default function Jumbotron({
    titleOne,
    titleTwo,
    jumbotronText,
    jumbotronButtonText,
    jumbotronButtonHref,
    displayForm,
    titleOnly
}: JumbotronProps) {

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
        <section className={`jumbotron ${titleOnly ? "title-only" : "" }`}>
            <section className="jumbotron-content">
                <h1>{titleOne}</h1>
                <h1>{titleTwo}</h1>
                {
                    jumbotronText
                    &&
                    <p>{jumbotronText}</p>
                }
                {
                    jumbotronButtonText
                    &&
                    <Button
                        text={jumbotronButtonText}
                        href={jumbotronButtonHref}
                        size="large"
                        color="primary"
                    />
                }
            </section>
            {
                displayForm &&

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
            }
        </section>
    )
}