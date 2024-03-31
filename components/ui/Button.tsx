import Link from "next/link";

interface ButtonProps {
    readonly text: string;
    readonly size: 'small' | 'medium' | 'large';
    readonly color: 'primary' | 'secondary';
    readonly href?: string;
}

export default function Button({
    text,
    href,
    size,
    color
}: ButtonProps) {

    if (href) {
        return (
            <Link href={href} className={`btn ${size} ${color}`}>
                {text}
            </Link>
        )
    }

    return (
        <button className={`btn ${size} ${color}`}>
            {text}
        </button>
    )
}