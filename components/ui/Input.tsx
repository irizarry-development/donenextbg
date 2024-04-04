interface InputProps {
    readonly type: "text" | "email" | "tel" | "date" | "multiline" | "checkbox"
    readonly placeholder: string
    readonly label?: string
    readonly id: string
}

export default function Input({
    id,
    placeholder,
    label,
    type
}: InputProps) {

    if (type === "multiline") {
        return (
            <label className="form-field textarea">
                <span className="label">
                    {label}
                </span>
                <textarea
                    id={id}
                    name={id}
                    placeholder={placeholder}
                />
            </label>
        )
    } else {
        return (
            <label className="form-field">
                <span className="label">
                    {label}
                </span>
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                />
            </label>
        )
    }
}