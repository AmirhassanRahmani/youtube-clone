import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import CircleIcon from "@mui/icons-material/Circle";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/18907/images/f8hB0RbRUKaBPLJwwErs_file.jpg"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="you can find awesome programming lesson here! Also,expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />

      <VideoRow
        image="https://m.media-amazon.com/images/M/MV5BN2EwNzgyNGUtMjBlNC00NDEzLThiNGItNzYyOGI4Y2UwY2E1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg"
        channel="Clever Programmer"
        Icon={CircleIcon}
        title="Lets build youtube clone with sonny sangha"
        views={382}
        subs="659K"
        noOfVideos={382}
        description="you can find awesome programming lesson here! Also,expect programming tips and tricks that will take your coding skills to the ..."
      />

      <VideoRow
        image="https://d2j1wkp1bavyfs.cloudfront.net/wp-content/legacy/posts/31e453d0-ca37-42d2-9dd8-edf69cc353cb.jpg?q=80"
        channel="Clever Programmer"
        Icon={CircleIcon}
        title="Lets build youtube clone with sonny sangha"
        views={382}
        subs="659K"
        noOfVideos={382}
        description="you can find awesome programming lesson here! Also,expect programming tips and tricks that will take your coding skills to the ..."
      />

      <VideoRow
        image="https://media.vanityfair.com/photos/5384e1ad1fc749a8390001e5/master/pass/sherlock3_sig.jpg"
        channel="Clever Programmer"
        Icon={CircleIcon}
        title="Lets build youtube clone with sonny sangha"
        views={382}
        subs="659K"
        noOfVideos={382}
        description="you can find awesome programming lesson here! Also,expect programming tips and tricks that will take your coding skills to the ..."
      />

      <VideoRow
        image="https://images.mubicdn.net/images/film/105773/cache-75354-1541632664/image-w1280.jpg?size=800x"
        channel="Clever Programmer"
        Icon={CircleIcon}
        title="Lets build youtube clone with sonny sangha"
        views={382}
        subs="659K"
        noOfVideos={382}
        description="you can find awesome programming lesson here! Also,expect programming tips and tricks that will take your coding skills to the ..."
      />
    </div>
  );
}

export default SearchPage;
