import { useState, useEffect } from "react";
import "./App.css";
import backgroundImg from "./assets/1711227366316.jpeg";
import iconSets from "./components/Icons";
import Button from "./components/Button";

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
        <p>{cardData.company}</p>
        <p>{cardData.adress}</p>
        <div className="mb-4">
          <button
            onClick={() => setIconSet("mac")}
            className={`btn ${
              iconSet === "mac" ? "btn-dark" : "btn-secondary"
            } me-2`}
          >
            Mac Icons
          </button>
          <button
            onClick={() => setIconSet("android")}
            className={`btn ${
              iconSet === "android" ? "btn-dark" : "btn-secondary"
            }`}
          >
            Android Icons
          </button>
        </div>
        <div className="d-flex flex-column">
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
      </div>
    </div>
  );
}

export default App;
