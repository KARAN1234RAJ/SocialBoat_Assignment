import React from "react";
import "../style/Home.css";
import ProfileCard from "../view/ProfileCard";
import VideoCard from "../view/VideoCard";
import faker from "@faker-js/faker";

const Home = () => {
  // const videos = [
  //   {
  //     title: "Fitness video-1",
  //     description:
  //       "this is my first video, this video contain how to make perfect diet plan",
  //     duration: "5-minutes",
  //   },
  //   {
  //     title: "Fitness video-2",
  //     description:
  //       "this is my second video, this video contains benifit of drinking hot water in morning",
  //     duration: "7-minutes",
  //   },
  //   {
  //     title: "Fitness video-3",
  //     description:
  //       "this is my third video, this video contains the benifit of morning exercise and YOGA ",
  //     duration: "10-minutes",
  //   },
  // ];
  let info = faker.helpers.createCard();
  console.log(info);
  const videos = info.posts;
  return (
    <div>
      <ProfileCard
        name="KARAN RAJ"
        role="fitness influencer"
        description="Stay fit stay Healthy"
      />
      <div className="card-deck container">
        {videos.map((video) => {
          console.log(video);
          return (
            <VideoCard title={video.words} description={video.paragraph} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
