import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscription . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
