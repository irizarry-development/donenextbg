import Image from "next/image";

interface ContainerProps {
    readonly children?: React.ReactNode;
    readonly title: string;
    readonly subtitle: string;
    readonly image?: string;
}

export default function Container({
    children,
    title,
    subtitle,
    image
}: ContainerProps) {
    return (
        <section className="container">
            <section className="container-title">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </section>
            { 
                image
                    &&
                <Image className="container-image" src={`/${image}`} alt={title} width={240} height={240} />
            }
            <section className="container-content">
                {children}
            </section>
        </section>
    )
}