import Button from "~/components/ui/Button";

export default function Jumbotron() {
    return (
        <section className="jumbotron">
            <h1>Done.</h1>
            <h1>Next.</h1>
            <p>The premier house upscaling service in the greater Bowling Green area.</p>
            <Button
                text="Get Started"
                href="/services"
                size="large"
                color="primary"
            />
        </section>
    )
}