import { useState, useEffect } from "react";
import "./App.css";
import backgroundImg from "./assets/1711227366316.jpeg";
import {
  FaPhoneAlt,
  FaGlobe,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaSpotify,
  FaGithub,
  FaPinterestP,
} from "react-icons/fa";
import { SiViber, SiTiktok, SiSkype } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    lastname: "",
    position: "",
    contactInfo: [],
    cardImage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://testing.api.addme.ge/api/card/getcard/Guro",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const items = data?.data?.cardItemInputs || [];
      const name = items.find((item) => item.name === "Firstname")?.value || "";
      const lastname =
        items.find((item) => item.name === "Lastname")?.value || "";
      const position =
        items.find((item) => item.name === "Position")?.value || "";

      setCardData({
        name,
        lastname,
        position,
        contactInfo: items,
        cardImage: data?.data?.cardImage || "",
      });

      console.log(data);
    };
    fetchData();
  }, []);

  const handleButtonClick = (value) => {
    console.log(value);
  };

  const excludedNames = ["Firstname", "Lastname", "Position"];

  const filteredContactInfo = cardData.contactInfo.filter(
    (item) => !excludedNames.includes(item.name)
  );

  const iconMap = {
    Phone: <FaPhoneAlt />,
    Website: <FaGlobe />,
    Whatsapp: <FaWhatsapp />,
    Viber: <SiViber />,
    Facebook: <FaFacebookF />,
    Instagram: <FaInstagram />,
    Email: <MdEmail />,
    Linkedin: <FaLinkedin />,
    Twitter: <FaTwitter />,
    Tiktok: <SiTiktok />,
    Skype: <SiSkype />,
    Github: <FaGithub />,
    Pinterest: <FaPinterestP />,
    Spotify: <FaSpotify />,
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          width: "100vw",
          height: "175px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`https://storage.googleapis.com/addmeimages/${cardData.cardImage}`}
          alt="user-img"
          className="rounded-circle img-thumbnail mb-3"
          style={{ width: "150px", height: "150px", marginTop: "13rem" }}
        />
      </div>
      <div className="text-center" style={{ marginTop: "8rem" }}>
        <h2 className="mb-1">{`${cardData.name} ${cardData.lastname}`}</h2>
        <p className="text-muted mb-4">{cardData.position}</p>
        <div className="d-flex flex-column ">
          {filteredContactInfo.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(item.value)}
              className="btn btn-dark btn-lg mb-4"
            >
              {iconMap[item.placeholder] || <FaPhoneAlt />}
              <span className="ms-2">{item.placeholder}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
