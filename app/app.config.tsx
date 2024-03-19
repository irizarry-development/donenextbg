import { FaHouse, FaCircleInfo, FaListCheck, FaMapLocationDot, FaPhone } from "react-icons/fa6";

interface NavLink {
    readonly text: string;
    readonly href: string;
    readonly component: JSX.Element;
    readonly subnav?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
    { text: 'Home', href: '/', component: <FaHouse />},
    { text: 'About', href: '/about', component: <FaCircleInfo />},
    { text: 'Services', href: '/services', component: <FaListCheck />,
        subnav: [
            { text: 'Interior Design', href: '/services/interior', component: <FaHouse />},
            { text: 'Remodel', href: '/services/remodel', component: <FaHouse />},
            { text: 'Painting', href: '/services/painting', component: <FaHouse />},
            { text: 'Demolition', href: '/services/demo', component: <FaHouse />}
        ]
    },
    { text: 'Coverage Area', href: '/coverage', component: <FaMapLocationDot />},
    { text: 'Contact', href: '/contact', component: <FaPhone />}
]