import { ReactNode } from "react"

interface FormProps {
    readonly children: ReactNode
    readonly formTitle: string
    readonly cssSelector?: string
    readonly handler?: (event: any) => void
}

export default function Form({
    children,
    formTitle,
    cssSelector,
    handler
}: FormProps) {
    return (
        <form action={handler} className={`form ${cssSelector}`}>
            <h2 className="form-title">{formTitle}</h2>
            <fieldset className="form-content">

                {children}
            </fieldset>
        </form>
    )
}