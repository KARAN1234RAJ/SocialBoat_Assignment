import React from "react";
import "../style/ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7" style={{ width: "90%" }}>
          <div class="card p-3 py-4">
            <div class="text-center">
              <img
                src="https://i.imgur.com/bDLhJiP.jpg"
                width="100"
                class="rounded-circle"
              />
            </div>
            <div class="text-center mt-3">
              <h5 class="mt-2 mb-0">{props.name}</h5>
              <span>{props.role}</span>
              <div class="px-4 mt-1">
                <p class="fonts">{props.description}</p>
              </div>
              <ul class="social-list">
                <li>
                  <i class="fab fa-facebook"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class="fab fa-linkedin"></i>
                </li>
                <li>
                  <i class="fab fa-google"></i>
                </li>
              </ul>
              <div class="buttons">
                <button class="btn btn-outline-primary px-4">Message</button>
                <button class="btn btn-primary px-4 ms-3">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
