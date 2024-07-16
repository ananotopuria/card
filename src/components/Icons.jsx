import {
  FaApple,
  FaPhoneAlt,
  FaGlobe,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPinterestP,
  FaSpotify,
  FaAndroid,
} from "react-icons/fa";
import { SiViber, SiTiktok, SiSkype } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";

const iconSets = {
  mac: {
    phone: <FaApple />,
    Phone: <FaPhoneAlt />,
    Website: <FaGlobe />,
    Whatsapp: <FaWhatsapp />,
    Viber: <SiViber />,
    Facebook: <FaFacebookF />,
    Instagram: <FaInstagram />,
    Email: <MdEmail />,
    Linkedin: <FaLinkedinIn />,
    Twitter: <FaXTwitter />,
    Tiktok: <SiTiktok />,
    Skype: <SiSkype />,
    Github: <FaGithub />,
    Pinterest: <FaPinterestP />,
    Spotify: <FaSpotify />,
  },
  android: {
    phone: <FaAndroid />,
    Phone: <FaPhone />,
    Website: <CgWebsite />,
    Whatsapp: <FaWhatsapp />,
    Viber: <SiViber />,
    Facebook: <ImFacebook2 />,
    Instagram: <ImInstagram />,
    Email: <MdMarkEmailUnread />,
    Linkedin: <FaLinkedin />,
    Twitter: <FaTwitter />,
    Tiktok: <AiFillTikTok />,
    Skype: <SiSkype />,
    Github: <FaGithub />,
    Pinterest: <FaSquarePinterest />,
    Spotify: <FaSpotify />,
  },
};

export default iconSets;
