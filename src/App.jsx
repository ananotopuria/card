import { useState, useEffect } from "react";
import "./App.css";
import backgroundImg from "./assets/1711227366316.jpeg";
import iconSets from "./components/Icons";
import Button from "./components/Button";
import { SiApple } from "react-icons/si";
import { SiAndroid } from "react-icons/si";

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    lastname: "",
    position: "",
    company: "",
    adress: "",
    contactInfo: [],
    cardImage: "",
  });

  const [iconSet, setIconSet] = useState("mac");

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
      const company =
        items.find((item) => item.name === "Company")?.value || "";
      const adress = items.find((item) => item.name === "Adress")?.value || "";

      setCardData({
        name,
        lastname,
        position,
        company,
        adress,
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

  const excludedNames = [
    "Firstname",
    "Lastname",
    "Position",
    "Adress",
    "Company",
  ];

  const filteredContactInfo = cardData.contactInfo.filter(
    (item) => !excludedNames.includes(item.name)
  );

  const icons = iconSets[iconSet] || {};

  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-3 mb-2 bg-light text-dark">
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100vw",
          height: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "0",
        }}
      >
        <img
          src={`https://storage.googleapis.com/addmeimages/${cardData.cardImage}`}
          alt="user-img"
          className="rounded-circle img-thumbnail mb-3"
          style={{ width: "150px", height: "150px", marginTop: "13rem", padding: "0" }}
        />
      </div>
      <div className="text-center" style={{ marginTop: "18rem"}}>
        <h3>{`${cardData.name} ${cardData.lastname}`}</h3>
        <p className="text-muted">{cardData.position}</p>
        <div className="d-flex flex-row gap-4 justify-content-center align-items-center text-muted mb-4">
          <p>{cardData.company}</p>
          <p>|</p>
          <p>{cardData.adress}</p>
        </div>
        <div className="d-flex flex-column mb-4">
          {filteredContactInfo.map((item, index) => (
            <Button
              key={index}
              iconType={iconSet}
              iconName={item.placeholder}
              label={item.placeholder}
              onClick={() => handleButtonClick(item.value)}
            />
          ))}
        </div>
        <div className="mb-4">
          <button
            onClick={() => setIconSet("mac")}
            className={`btn ${
              iconSet === "mac" ? "btn-dark" : "btn-secondary"
            } me-2`}
          >
            <SiApple />
          </button>
          <button
            onClick={() => setIconSet("android")}
            className={`btn ${
              iconSet === "android" ? "btn-dark" : "btn-secondary"
            }`}
          >
            <SiAndroid />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
