import React, { useState } from "react";
import "./SidebarChannel.css";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";
import SubjectIcon from "@mui/icons-material/Subject";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import HeroPage from "./HeroPage";
import Chat from "./Chat";

function SidebarChannel() {
  const user = useSelector(selectUser);

  const [userClicked, setUserClicked] = useState(false);
  const [isheroopen, setIsheroopen] = useState(true);

  function addfrd() {
    setIsheroopen(true);
    setUserClicked(false);
  }

  function userWithIds() {
    setUserClicked(true);
    setIsheroopen(false);
  }

  const handleClick = () => {
    // Handle the click event here
    console.log("AddIcon clicked!");
  };
  return (
    <>
      <div className="sidebar_content ">
        <div className="sidebarChannel">
          <input
            type="text"
            placeholder="Find or start a conversation"
            className="searchChannel"
          />
          <span className="horizontal_line"></span>
          <div>
            <div className="friends" onClick={addfrd}>
              <PersonAddAlt1Icon />
              <span>Friends</span>
            </div>
            <div className="nitro">
              <SpeedIcon />
              <span>Nitro</span>
            </div>
          </div>
          <div className="direct_message">
            <div className="light_heading">
              Direct Messages
              <span>
                {/* {onclick(() => {
                <AddIcon />;
               // console.log("clicked");
              })} */}
                <AddIcon onClick={handleClick} />
              </span>
            </div>

            <div className="user">
              <div className="profile" id="profile_id" onClick={userWithIds}>
                <div className="profile_avatar">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div className="username">
                  Somesh
                  <span className="status">
                    Listening to Spotify{" "}
                    <span>
                      <SubjectIcon />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="user_info">
            <div className="user_info_avatar ">
              <Avatar
                alt="Cindy Baker"
                src={user.photo}
                sx={{ width: 32, height: 32 }}
              />
              <span color="success" className="online_status"></span>
            </div>
            <div className="username">
              {user.displayName}
              <span className="status">#{user.uid.substring(0, 4)}</span>
            </div>
            <div className="btm_icons">
              <MicIcon sx={{ width: 22, height: 22 }} />
              <HeadphonesIcon sx={{ width: 22, height: 22 }} />
              <SettingsIcon sx={{ width: 22, height: 22 }} />
            </div>
          </div>
        </div>
        <div>
          {(isheroopen && <HeroPage />) ||
            (userClicked && setUserClicked && <Chat />)}
        </div>
      </div>
    </>
  );
}

export default SidebarChannel;
