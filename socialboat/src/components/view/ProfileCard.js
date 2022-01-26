import React from "react";
import "../style/ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div className="Card">
      <h4>{props.name}</h4>
    </div>
  );
};

export default ProfileCard;
