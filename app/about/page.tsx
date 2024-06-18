import { Fragment } from "react";
import Jumbotron from "~/components/containers/Jumbotron";

export default function AboutPage() {
    return (
        <Fragment>
            <Jumbotron 
                titleOne="About"
                titleTwo="Us"
                displayForm={false}
                titleOnly
            />
        </Fragment>
    )
}