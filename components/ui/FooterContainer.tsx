interface FooterContainerProps {
    readonly title?: string
    readonly children: React.ReactNode
}

export default function FooterContainer({
    title, children
}: FooterContainerProps) {
    return (
        <section className="app-footer-container">
            {  
                title 
                    && 
                <h2 className="app-footer-container-title">
                    {title}
                </h2>
            }
            <section className="app-footer-container-content">
                {children}
            </section>
        </section>
    )
}