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
            { text: 'Demolition', href: '/services/demolition', iconComponent: <FaHouse /> }
        ]
    },
    { text: 'Coverage Area', href: '/coverage', iconComponent: <FaMapLocationDot /> },
    { text: 'Contact', href: '/contact', iconComponent: <FaPhone /> }
]

export const CONTACT_PHONE_NUMBER = '123-456-7890';
export const CONTACT_EMAIL = 'hello@irizarry.dev'

export const FACEBOOK_URL = 'https://facebook.com';
export const INSTAGRAM_URL = 'https://instagram.com';

export const COMPANY_NAME = 'DoneNextBG';

/**
 *
 * Main Page Configuration
 * 
 */

export const JUMBOTRON_TEXT: string = "The premier house upscaling service in the greater Bowling Green area.";
export const JUMBOTRON_BUTTON_TEXT: string = "Get Started";
export const JUMBOTRON_BUTTON_HREF: string = "/services";

interface ServiceCard {
    readonly title: string
    readonly description: string
    readonly image: string
    readonly cta: {
        readonly label: string
        readonly href: string
    }
}

export const SERVICE_CARDS: ServiceCard[] = [
    {
        title: 'Interior Design',
        description: 'From picture hanging to furniture arrangement, we can help you get your house looking its best.',
        image: 'interiordesign.jpeg',
        cta: {
            label: 'Learn About Interior Design',
            href: '/services/interior'
        }
    },
    {
        title: 'Remodel',
        description: 'Want to freshen things up? Hire us for your next remodel project, big or small.',
        image: 'kitchenremodel.jpeg',
        cta: {
            label: 'See Our Remodel Services',
            href: '/services/remodel'
        }
    },
    {
        title: 'Painting',
        description: 'We can help you with your next painting project. From walls to cabinets, we have you covered.',
        image: 'bathroomremodel.jpeg',
        cta: {
            label: 'View Our Painting Services',
            href: '/services/painting'
        }
    }
]

export const CAROUSEL_DELAY: number = 7;

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