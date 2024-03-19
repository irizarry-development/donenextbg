import Card from "./Card";

interface CardMasonryProps {
    readonly children?: React.ReactNode;
}

export default function CardMasonry({
    children
}: CardMasonryProps) {
    return (
        <section className="card-masonry">
            { children }
        </section>
    )
}