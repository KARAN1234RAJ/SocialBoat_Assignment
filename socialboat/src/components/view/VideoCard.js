import React from "react";
import "../style/VideoCard.css";

const VideoCard = (props) => {
  return (
    <div className="card">
      <video
        src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
        controls
      ></video>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <h6>5- Minutes</h6>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default VideoCard;
