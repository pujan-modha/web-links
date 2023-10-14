import {faLinkedin, faGithub, faXTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLinkedin, faGithub, faXTwitter, faInstagram);



export const linksData = [
    {
        fontAwesomeIcon: "fa-brands fa-instagram",
        linkText: "Instagram",
        redirectURL: "https://instagram.com/pujan_modha",
    },
    {
        fontAwesomeIcon: "fa-brands fa-github",
        linkText: "Github",
        redirectURL: "https://github.com/pujan-modha",
    },
    {
        fontAwesomeIcon: "fa-brands fa-linkedin",
        linkText: "LinkedIn",
        redirectURL: "https://linkedin.com/in/pujan-modha",
    },
    {
        fontAwesomeIcon: "fa-brands fa-x-twitter",
        linkText: "Twitter",
        redirectURL: "https://x.com/pujan-modha",
    },
]