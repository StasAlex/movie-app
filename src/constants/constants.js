import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa"
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoImdb } from "react-icons/bi";
import { ImWikipedia } from "react-icons/im";



export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

export const socialPlatforms = [
    {
      id: "facebook_id",
      name: "Facebook",
      baseUrl: "https://www.facebook.com/",
      icon: <FaFacebook/>
    },
    {
      id: "instagram_id",
      name: "Instagram",
      baseUrl: "https://www.instagram.com/",
      icon: <FaInstagramSquare/>,
    },
    {
      id: "tiktok_id",
      name: "TikTok",
      baseUrl: "https://www.tiktok.com/@",
      icon: <AiFillTikTok />,
    },
    {
      id: "twitter_id",
      name: "Twitter",
      baseUrl: "https://twitter.com/",
      icon: <FaSquareXTwitter/>,
    },
    {
      id: "youtube_id",
      name: "YouTube",
      baseUrl: "https://www.youtube.com/user/",
      icon: <FaYoutube/>,
    },
    {
      id: "imdb_id",
      name: "IMDb",
      baseUrl: "https://www.imdb.com/name/",
      icon: <BiLogoImdb/>,
    },
    {
      id: "wikidata_id",
      name: "Wikidata",
      baseUrl: "https://www.wikidata.org/wiki/",
      icon: <ImWikipedia/>,
    },
    {
      id: "freebase_mid",
      name: "Freebase",
      baseUrl: "https://www.freebase.com/m/",
      icon: "📚",
    },
  ];