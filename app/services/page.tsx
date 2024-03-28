import CardMasonry from "~/components/ui/CardMasonry";
import { SERVICE_CARDS } from "../app.config";
import Card from "~/components/ui/Card";

export default function ServicesPage() {
    return (
        <article>
            <CardMasonry>
                {SERVICE_CARDS.map((card, index) => <Card key={index} {...card} />)}
            </CardMasonry>  
        </article>
    )
}