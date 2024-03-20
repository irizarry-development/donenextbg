import Image from 'next/image';
import Button from './Button';

interface CardProps {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly cta?: {
        readonly label: string;
        readonly href: string;
    }
}

export default function Card({
    title,
    description,
    image,
    cta
}: CardProps) {
    return (
        <section className="card">
            <Image className="card-image" src={`/${image}`} alt={`Image of ${title}`} width={200} height={200} />
            <h2 className="card-title">
                {title}
            </h2>
            <p className="card-description">
                {description}
            </p>
            {
                cta &&
                    <Button
                        text={cta.label}
                        href={cta.href}
                        size='large'
                        color='primary'
                    />
            }
        </section>
    )
}