import { FaHouse, FaCircleInfo, FaListCheck, FaMapLocationDot, FaPhone } from "react-icons/fa6";

/**
 * 
 * Global Configuration
 * 
 */

interface NavLink {
    readonly text: string;
    readonly href: string;
    readonly iconComponent: JSX.Element;
    readonly subnav?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
    { text: 'Home', href: '/', iconComponent: <FaHouse /> },
    { text: 'About', href: '/about', iconComponent: <FaCircleInfo /> },
    {
        text: 'Services', href: '/services', iconComponent: <FaListCheck />,
        subnav: [
            { text: 'Interior Design', href: '/services/interior', iconComponent: <FaHouse /> },
            { text: 'Remodel', href: '/services/remodel', iconComponent: <FaHouse /> },
            { text: 'Painting', href: '/services/painting', iconComponent: <FaHouse /> },
            { text: 'Demolition', href: '/services/demo', iconComponent: <FaHouse /> }
        ]
    },
    { text: 'Coverage Area', href: '/coverage', iconComponent: <FaMapLocationDot /> },
    { text: 'Contact', href: '/contact', iconComponent: <FaPhone /> }
]

/**
 * 
 * Main Page Configuration
 * 
 */

export const JUMBOTRON_TEXT: string = "The premier house upscaling service in the greater Bowling Green area.";
export const JUMBOTRON_BUTTON_TEXT: string = "Get Started";
export const JUMBOTRON_BUTTON_HREF: string = "/services";

/**
 * 
 * Coverage Page Configuration
 * 
 */

export const DEFAULT_MAP_CENTER = {
    lat: 36.9636545,
    lng: -86.4805194
}

export const DEFAULT_MAP_ZOOM: number = 7;
export const MAP_CIRCLE_RADIUS: number = 120000;

export const MAP_CIRCLE_FILL_OPACITY: number = 0.3;
export const MAP_CIRCLE_FILL_COLOR: string = '#3b82f6';

export const MAP_CIRCLE_STROKE_OPACITY: number = 1;
export const MAP_CIRCLE_STROKE_WEIGHT: number = 3;
export const MAP_CIRCLE_STROKE_COLOR: string = '#0c4cb3';

export const COVERAGE_DETAIL_HEADER: string = "Our Coverage Area";
export const COVERAGE_DETAIL_TEXT: string = "We are proud to serve the following areas:";

export const COVERAGE_AREAS: string[] = [
    'Bowling Green, KY',
    'Glasgow, KY',
    'Scottsville, KY',
    'Franklin, KY',
    'Morgantown, KY',
    'Brownsville, KY',
    'Leitchfield, KY',
    'Russellville, KY',
    'Springfield, TN',
    'Portland, TN',
    'White House, TN',
    'Hendersonville, TN',
    'Gallatin, TN',
    'Nashville, TN'
]

export const COVERAGE_DISCLAIMER: string = "If your area is not listed, please contact us to see if we can help you.";

export const COVERAGE_CTA_BUTTON_TEXT: string = "Contact Us";
export const COVERAGE_CTA_BUTTON_HREF: string = "/contact";