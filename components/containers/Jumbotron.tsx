import { JUMBOTRON_BUTTON_HREF, JUMBOTRON_BUTTON_TEXT, JUMBOTRON_TEXT } from "~/app/app.config";
import Button from "~/components/ui/Button";
import Form from "~/components/ui/Form";
import Input from "~/components/ui/Input";

export default function Jumbotron() {
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
                    type="text"
                />

                <Input
                    id="project-details"
                    placeholder="Enter your project details"
                    type="multiline"
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