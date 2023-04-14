import React from "react";
import "./RecommendedVideo.css";
import VideoCard from "./VideoCard";
function RecommendedVideo() {
  return (
    <div className="recommendedVideo">
      <h2>Recommended</h2>
      <div className="recommendedVideo__videos">
        <VideoCard
          title="Sonny Sangha"
          views="1.2M Views"
          timestamp="3days ago"
          channel="sonny sangha"
          channelImage="https://avatars.githubusercontent.com/u/24712956?v=4"
          image="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg"
        />
        <VideoCard
          title="jon bone jones"
          views="2.2M Views"
          timestamp="2 days ago"
          channel="jon jones"
          channelImage="https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg"
          image="https://www.gannett-cdn.com/presto/2019/07/22/USAT/f27053c8-a03c-4895-a630-3f34a402bd91-Jon_Jones_Actual.JPG"
        />
        <VideoCard
          title="magnus carlsen"
          views="0.2M Views"
          timestamp="5 days ago"
          channel="chess prodigy"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg/640px-FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg"
          image="https://static01.nyt.com/images/2022/07/20/sports/20chessWEB1/merlin_199055868_bebd97f5-375b-4dd1-99f7-356b107fa01b-videoSixteenByNine3000.jpg"
        />
        <VideoCard
          title="iphone 13 pro max"
          views="23M Views"
          timestamp="1 days ago"
          channel="phone technology"
          channelImage="https://dkstatics-public.digikala.com/digikala-products/195bd99289c288cbb927fe9b9d659275eefeae71_1634450038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYerq5k6jjKkLfIVHBFv52Gv0HlIDsWkJTg&usqp=CAU"
        />
        <VideoCard
          title="ronaldo"
          views="232M Views"
          timestamp="3 days ago"
          channel="football player"
          channelImage=""
          image="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F962792886.jpeg"
        />
        <VideoCard
          title="Sonny Sangha"
          views="1.2M Views"
          timestamp="3days ago"
          channel="sonny sangha"
          channelImage="https://avatars.githubusercontent.com/u/24712956?v=4"
          image="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg"
        />
        <VideoCard
          title="jon bone jones"
          views="2.2M Views"
          timestamp="2 days ago"
          channel="jon jones"
          channelImage="https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg"
          image="https://www.gannett-cdn.com/presto/2019/07/22/USAT/f27053c8-a03c-4895-a630-3f34a402bd91-Jon_Jones_Actual.JPG"
        />
        <VideoCard
          title="magnus carlsen"
          views="0.2M Views"
          timestamp="5 days ago"
          channel="chess prodigy"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg/640px-FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg"
          image="https://static01.nyt.com/images/2022/07/20/sports/20chessWEB1/merlin_199055868_bebd97f5-375b-4dd1-99f7-356b107fa01b-videoSixteenByNine3000.jpg"
        />
        <VideoCard
          title="iphone 13 pro max"
          views="23M Views"
          timestamp="1 days ago"
          channel="phone technology"
          channelImage="https://dkstatics-public.digikala.com/digikala-products/195bd99289c288cbb927fe9b9d659275eefeae71_1634450038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYerq5k6jjKkLfIVHBFv52Gv0HlIDsWkJTg&usqp=CAU"
        />
        <VideoCard
          title="ronaldo"
          views="232M Views"
          timestamp="3 days ago"
          channel="football player"
          channelImage=""
          image="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F962792886.jpeg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideo;
