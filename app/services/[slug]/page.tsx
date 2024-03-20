import { getService } from "~/lib/services";

type Params = {
    slug: string
}

type Props = {
    params: Params
}

export default async function Service({ params }: Props) {
    const { slug } = params
    const {
        title,
        contentHtml,
        date
    } = await getService(slug)

    return (
        <article className="service-article">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p>{date}</p>
        </article>
    )
}