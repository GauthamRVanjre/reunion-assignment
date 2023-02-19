import React from "react";
import No_image from "../assets/no_image.jpg";
import "./Homes.css";

const HomeCard = ({ home }) => {
  return (
    <div key={home.id} class="card">
      <img
        src={home.coverPhoto ? home.coverPhoto.url : No_image}
        class="card-img-top"
        alt="cover img"
      />

      <div class="card-body">
        <p style={{ fontWeight: "700" }} className="card-title">
          {home.price} AED
          {home.rentFrequency ? `/${home.rentFrequency}` : ""}
        </p>
        <div class="card-text">
          <p>
            {home.title.length > 40
              ? home.title.substring(0, 40) + "..."
              : home.title}
          </p>
          <div className="card-feature">{home.rooms} bedroom</div>
          <div className="card-feature">{home.baths} bathroom</div>
          <div className="card-feature">{home.area} SQFT</div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
