import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import { deepPurple } from "@mui/material/colors";
import ExploreIcon from "@mui/icons-material/Explore";
import SidebarChannel from "./SidebarChannel";
import ChannelChat from "./ChannelChat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db from "./Firebase";
import firebase from "firebase/compat/app";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  const [data2, setData2] = useState([]);
  const [isDMOpen, setIsDMOpen] = useState(true);
  const [isChannelClick, setIsChannelClick] = useState(false);

  const showDm = () => {
    setIsDMOpen(true);
    setIsChannelClick(false);
  };

  useEffect(() => {
    const userdetails = db.collection("Servers").doc("aEWeqT8cP7FJcCjRiBV2");
    userdetails.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        // console.log(data.serverCollections[0]);   // this is the way to access the data from the array of objects
        setData2(data.serverCollections);
        // const channelIds = Object.keys(data);
        setChannels(data.serverCollections);
      }
    });
  }, []);

  const showChannel = (channel) => {
    setIsChannelClick(true);
    setIsDMOpen(false);
    // data2.map((server) => {
    //   console.log(
    //     `servername: ${server.serverName} channel: ${server.channelName.channelName}`
    //   );
    // });
    console.log(channel);
  };

  const createNewChannel = () => {
    const serverName = prompt("Enter a new server name:");

    if (serverName) {
      const serverDocRef = db.collection("Servers").doc("aEWeqT8cP7FJcCjRiBV2");
      serverDocRef
        .update({
          serverCollections: firebase.firestore.FieldValue.arrayUnion({
            serverName: serverName,
            channelCreator: user.displayName,
            creatorUserId: user.email,
            channelName: {
              channelName: "general",
            },
          }),
        })
        .then(() => {
          console.log("Channel created successfully!");
        })
        .catch((error) => {
          console.error("Error creating channel:", error);
        });
    } else {
      alert("Channel name can't be empty");
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="flex flex-col avatars">
          <div id="discord_dmicon" onClick={showDm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26"
              height="26"
              viewBox="0 0 48 48"
              className="avatar discordIcon"
            >
              <path
                fill="#ffff"
                d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
              ></path>
            </svg>
          </div>
          {/* all channel avatar are here  */}
          <span className="avatarborder"></span>
          <div className="channel_icons_list">
            <Avatar
              sx={{ bgcolor: deepPurple[500] }}
              className="avatar"
              onClick={showChannel}
            >
              OP
            </Avatar>
            {channels.map((channel) => (
              <Avatar
                key={channel.serverName}
                className="avatar"
                alt={channel.serverName}
                onClick={() => showChannel(channel.serverName)}
                style={{ backgroundColor: deepPurple[500] }}
              >
                {channel.serverName[0]}
              </Avatar>
            ))}
            <AddIcon
              className="addIcon"
              id="add_more_channel"
              onClick={createNewChannel}
            />
            <ExploreIcon className="exploreIcon" id="explore_more" />
          </div>
        </div>
        <div>
          {/* <HeroPage id="hero_page" /> */}
          {(isDMOpen && <SidebarChannel id="dm_userslist" />) ||
            (isChannelClick && (
              <ChannelChat id="channel_chat" props={channels} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
