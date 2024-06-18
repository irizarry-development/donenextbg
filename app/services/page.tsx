import CardMasonry from "~/components/ui/CardMasonry";
import { JUMBOTRON_BUTTON_HREF, JUMBOTRON_BUTTON_TEXT, JUMBOTRON_TEXT, SERVICE_CARDS } from "../app.config";
import Card from "~/components/ui/Card";
import { Fragment } from "react";
import Jumbotron from "~/components/containers/Jumbotron";
import Container from "~/components/containers/Container";
import WaveContainer from "~/components/containers/WaveContainer";

export default function ServicesPage() {
    return (
        <Fragment>
            <Jumbotron 
                titleOne="Our"
                titleTwo="Services"
                displayForm={false}
                titleOnly
            /> 
            <WaveContainer
                
            >
                <CardMasonry>
                    {SERVICE_CARDS.map((card, index) => <Card key={index} {...card} />)}
                </CardMasonry>
            </WaveContainer>
        </Fragment>
    )
}