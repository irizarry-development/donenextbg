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
        title: 'Repair',
        description: 'Need a quick fix? We can help you with your next repair project.',
        image: 'repair.jpeg',
        cta: {
            label: 'View Our Repair Services',
            href: '/services/repair'
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
        image: 'painting.jpeg',
        cta: {
            label: 'Our Painting Services',
            href: '/services/painting'
        }
    },
    {
        title: 'Carpentry',
        description: 'Need a custom piece? We can help you with your next carpentry project.',
        image: 'carpentry.jpeg',
        cta: {
            label: 'Learn About Our Carpentry Services',
            href: '/services/carpentry'
        }
    },
    {
        title: 'Furniture Refresh',
        description: 'Want to update your furniture? We can help you with your next furniture refresh project.',
        image: 'furniture-refresh.jpeg',
        cta: {
            label: 'See Our Furniture Refresh Services',
            href: '/services/furniture'
        }
    },
    {
        title: 'Flooring & Tile',
        description: 'Need new floors? We can help you with your next flooring or tile project.',
        image: 'bathroomremodel.jpeg',
        cta: {
            label: 'View Our Flooring & Tile Services',
            href: '/services/flooring'
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
    lng: -86.4805200
}

export const DEFAULT_MAP_ZOOM: number = 8.2;

export const COVERAGE_DETAIL_HEADER: string = "Our Coverage Area";
export const COVERAGE_DETAIL_TEXT: string = "We are proud to serve the following areas:";

export const COVERAGE_AREAS: string[] = [
    'Warren County, KY',
    'Butler County, KY',
    'Barren County, KY',
    'Simpson County, KY',
    'Logan County, KY',
    'Edmonson County, KY',
    'Allen County, KY'
]

export const COVERAGE_DISCLAIMER: string = "If your area is not listed, please contact us to see if we can help you.";

export const COVERAGE_CTA_BUTTON_TEXT: string = "Contact Us";
export const COVERAGE_CTA_BUTTON_HREF: string = "/contact";

export const COVERAGE_POLYGONS = [
    /* Warren County */ 'woy`Fpq_pOfyUsgK|hIkpDv{@geO|qAqmR|_E~\\c{Q_wZ}O~Iyw@mPcJn_@}`@|BoJyPdJiXkJuIzOwTaBw[g^aMxLux@k[iBnDy[yt@cBaBi_@i^gTlDsf@hi@sXpD_Q{Uwb@}c@gTuUxBcJfXil@zMsi@k[iP_j@nX{BlXgQhXkXfJuTgPmf@q`AwbAtAy[kwWegIo_BbjN{jDxbDlPpjAx[zfAtUfMxl@rfAdV`nA`Ef|@@xIahPvhVjS~fAdM~E``AmUnJnTk|@heCu`@bg@jMlTtw@|AjJ`FdP~WjBj|@mR|x@gl@dC}iBh~Aa^dJaJzf@sc@dUfPd_@vJxm@RfgAbPjTxi@h[kf@zj@lM`XrX`MFz[uI~jAoRjc@uUzBsGiMkGjFlShcA_Jzf@d^vExJvm@sc@l\\}CnnAn^rb@iUlc@tGpTnJfMxc@`B|]wXhU_g@hnAc@t[~^zOaJ|r[zgJ',
    /* Butler County */ 'i`gaFhvsqOeXtXma@y^_B}PjDwT_Kmx@k_@_gBsJkTO{m@uG{PmU`UqXcB}L|TqDfF{OdJo[}L}`@fCbGs_@{D}P|L{TuJu[hGoMoJgMcJrMgGlXyIlj@oDpM{OvMkXtFsXiImJsIkJDbH|t@rXjIfEjq@mGxBsXkI{DqTsUrFqk@x`AcM|Bal@nUaa@}Ako@cPs[wW{c@}Ac[~MbDmj@Qoq@`Ukn@yGu[ga@aTg[dClSvt@}h@hr@eBm_@_BwIogBfZsMaj@qGB_\\{{@}UgTiqA}K_uAuwAa\\}{@zIoj@k^oPqi@oEgd@ob@mu@et@iMeM{f@kPo[sPsX_MOij@hGiQ`G{f@wmArv@sgB|Rqo@}e@a_@_nAeBo_@dv@amCzaB_Zp]ky@pD}Imd@gx@ssOu~YxlEqhWvbGsrBfzLgdEruNilFjS~fAdM~E``AmUnJnTk|@heCu`@bg@jMlTtw@|AjJ`FdP~WjBj|@mR|x@gl@dC}iBh~Aa^dJaJzf@sc@dUfPd_@vJxm@RfgAbPjTxi@h[kf@zj@lM`XrX`MFz[uI~jAoRjc@uUzBsGiMkGjFlShcA_Jzf@d^vExJvm@sc@l\\}CnnAn^rb@iUlc@tGpTnJfMxc@`B|]wXhU_g@hnAc@t[~^zOaJ|r[zgJy{ClyM{aExmQ{oAnzQ',
    /* Edmonson County */ 'afxbFnlwnOfzLgdEruNilF`hPwhVAyIaEg|@eVanAyl@sfAuUgMy[{fAmPqjAzjDybDn_BcjNxp@mtFgoNsjAovEma@qkHio@oeDhtCsiQ`pOfV|nBsc@bg@qR~f@rXt[li@gJhM|PsAdc@a[|q@|K|fGt{@rui@',
    /* Barren County */ 'mvl`F~h|lOkwWegIxp@mtFgoNsjAovEma@tLkkBvp@ucH`D_sCf`@opEhOewD}PanHsiAayIw[}dDuJ{aEbvBl|A|hApnBlqDa`@mJux@jGcc@d`A~EjeEpEx`GoUbdC}_@~`@uBt~]k_ABfcAfa@|_BwAdj@|w@vqBbd@rjBf~LtyVdjDfdHasBrc@mw@j|@qt@xx@mGv[{WxnChM`XjJ`F@|Pi[~IwRzIa[h|@yRzIyU}WlD}t@iMe_@c^jFaMfX{RmBkGpTwRbQlJ`XsDxIuw@wE}A}PuU_FcJvm@bVlcBcMzI{RaFuDiM}eAmPcd@y{@ut@hc@qc@j|@ohAbg@ww@oP}O`Q{c@oI{AwIfJoM{c@aMiXhj@oz@tFoGcFuJa|@vU~EAwI{RgMoXxBqUhXmDxm@hPdcAoAv_AfcAxp@ba@tPrUyBtbAe`Al[nIvDjMwApTqU~[oXDuRhX}`@nFmyAfy@mDrf@~UbcAc[p_@uXo[gPeq@wbAhn@ecAe[g^cMiJfFhPlx@BjMfM|Pj[nItf@K|OcQxRlB|Upm@D~b@cJ~b@qc@bn@sXkTwGaj@wUyPsG{Pe^zBc[r_@',
    /* Allen County */ 'eiu~EfelnOo`AxN{}A|_@e@LeMD}yAqZs~BgHusEoUwqDqYc{Q_wZ}O~Iyw@mPcJn_@}`@|BoJyPdJiXkJuIzOwTaBw[g^aMxLux@k[iBnDy[yt@cBaBi_@i^gTlDsf@hi@sXpD_Q{Uwb@}c@gTuUxBcJfXil@zMsi@k[iP_j@nX{BlXgQhXkXfJuTgPmf@q`AwbAtAy[b[s_@d^{BrGzPvUxPvG`j@rXjTpc@cn@bJ_c@E_c@}Uqm@yRmB}ObQuf@Jk[oIgM}PCkMiPmx@hJgFf^bMdcAd[vbAin@fPdq@tXn[b[q_@_VccAlDsf@lyAgy@|`@oFtRiXnXEpU_\\vAqTwDkMm[oIubAd`AsUxBca@uPgcAyp@nAw_AiPecAlDym@pUiXnXyBzRfM@vIwU_FtJ`|@nGbFnz@uFhXij@zc@`MgJnMzAvIzc@nI|OaQvw@nPnhAcg@pc@k|@tt@ic@bd@x{@|eAlPtDhMzR`FbM{IcVmcBbJwm@tU~E|A|Ptw@vErDyImJaXvRcQjGqTzRlB`MgXb^kFhMd_@mD|t@xU|WxR{I`[i|@vR{Ih[_JA}PkJaFiMaXzWynClGw[pt@yx@lw@k|@`sBsc@ni@GpzCorA~cC_r@~n@wf@`cAvEvDr[rXd_@nkBxuAAdQaArbAqBnrBeDbfDGhAmAt_@sRjgGP|FuBjlA}D`|BgCfwAqS~nLkApl@a@xM{B|v@Kl@m@tOMdRqOdgGkJzsDuSpoFUnFy@zk@{CvtBw@|zA`ApFqBjbDk@d~@',
    /* Simpson County */ '{~t~E`{ppOOyW_AayGkAqzAgBy|B{JenMq@gcAMkPEaGjNaTzUo^nM}RjFeInJyNfBmCnj@wz@wZumAui@wFxDsh@|SlAeJy`@g~@g~DzCeuEAQOsFOaVxF{dJo`AxN{}A|_@e@LeMD}yAqZs~BgHusEoUwqDqY}_E_]}qApmRw{@feO}hIjpDd@l`C|j@juCt_CdwBbaA~~AbzEjuAvtAbiA`|Gn_DdpCpy@pfNpeA',
    /* Logan County */ 'gys~Ed`krOsB{vByAizDq@eeAw@qoAgHwdLy@krAIoBsBmbIa@uaA_@g`AuAe{AO{LLuRmAwzAE_Kk@uv@aC_yCqfNqeAepCqy@a|Go_DwtAciAczEkuAcaA__Bu_CewB}j@kuCe@m`CgyUrgKy{ClyM{aExmQ{oAnzQo[n{EnmA~|Mn|JvIztD`AnlFbA|hJfD|mD|BtgGhFdgFiq@|xBhy@zsBd@rzOvE'
]