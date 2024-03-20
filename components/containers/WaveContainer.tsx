import Image from "next/image";

interface WaveContainerProps {
    readonly children?: React.ReactNode;
    readonly title: string;
    readonly subtitle: string
    readonly image?: string;
}

export default function WaveContainer({
    children,
    title,
    subtitle,
    image
}: WaveContainerProps) {
    return (
        <section className="wave-container">
            <svg className="top-wave" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L18.5,192C36.9,192,74,192,111,181.3C147.7,171,185,149,222,160C258.5,171,295,213,332,213.3C369.2,213,406,171,443,160C480,149,517,171,554,160C590.8,149,628,107,665,74.7C701.5,43,738,21,775,58.7C812.3,96,849,192,886,229.3C923.1,267,960,245,997,202.7C1033.8,160,1071,96,1108,90.7C1144.6,85,1182,139,1218,160C1255.4,181,1292,171,1329,176C1366.2,181,1403,203,1422,213.3L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
            <section className="wave-content">
                {
                    image 
                        &&
                    <Image src={image} className="wave-image" alt={title} width={240} height={240} />
                }
                <section className="wave-content-title">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </section>
                <section className="wave-content-body">
                    {children}
                </section>
            </section>
            <svg className="bottom-wave" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L18.5,170.7C36.9,181,74,203,111,213.3C147.7,224,185,224,222,202.7C258.5,181,295,139,332,122.7C369.2,107,406,117,443,128C480,139,517,149,554,154.7C590.8,160,628,160,665,149.3C701.5,139,738,117,775,96C812.3,75,849,53,886,64C923.1,75,960,117,997,128C1033.8,139,1071,117,1108,128C1144.6,139,1182,181,1218,213.3C1255.4,245,1292,267,1329,256C1366.2,245,1403,203,1422,181.3L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
        </section>
    )
}