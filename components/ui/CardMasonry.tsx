import Card from "./Card";

export default function CardMasonry() {
    return (
        <section className="card-masonry">
            <Card 
                title="Interior Design"
                description="We offer a variety of interior design services to help you get your house looking its best."
                image="interiordesign.svg"
            />
            <Card 
                title="Remodel"
                description="We offer a variety of remodeling services to help you get your house looking its best."
                image="remodel.svg"
            />
        </section>
    )
}