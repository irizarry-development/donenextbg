import { JUMBOTRON_BUTTON_HREF, JUMBOTRON_BUTTON_TEXT, JUMBOTRON_TEXT } from "~/app/app.config";
import Button from "~/components/ui/Button";

export default function Jumbotron() {
    return (
        <section className="jumbotron">
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
    )
}