import { ReactNode } from "react"

interface FormProps {
    readonly children: ReactNode
    readonly formTitle: string
    readonly cssSelector?: string
}

export default function Form({
    children,
    formTitle,
    cssSelector
}: FormProps) {
    return (
        <form className={`form ${cssSelector}`}>
            <h2 className="form-title">{formTitle}</h2>
            <fieldset className="form-content">

                {children}
            </fieldset>
        </form>
    )
}