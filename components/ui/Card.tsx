import Image from 'next/image';

interface CardProps {
    readonly title: string;
    readonly description: string;
    readonly image: string;
}

export default function Card({
    title,
    description,
    image
}: CardProps) {
    return (
        <section className="card">
            <Image className="card-image" src={`/${image}`} alt="Interior Design" width={200} height={200} />
            <h2 className="card-title">
                {title}
            </h2>
            <p className="card-description">
                {description}
            </p>
        </section>
    )
}