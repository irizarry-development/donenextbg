interface InputProps {
    readonly type: "text" | "email" | "tel" | "date" | "multiline" | "checkbox" | "select"
    readonly placeholder: string
    readonly label?: string
    readonly id: string
    readonly options?: string[]
}

export default function Input({
    id,
    placeholder,
    label,
    type,
    options
}: InputProps) {
    if (type=== "select") {

        if (!options) {
            throw new Error("Select inputs must have options")
        }

        return (
            <label className="form-field select">
                <select
                    id={id}
                    name={id}
                >
                    <option value="">{label}</option>
                    {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
                </select>
            </label>
        )
    } else if (type === "multiline") {
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
            <label className={`form-field ${type}`}>
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