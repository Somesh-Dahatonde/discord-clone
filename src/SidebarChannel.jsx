import React from "react";
import "./SidebarChannel.css";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";
import SubjectIcon from "@mui/icons-material/Subject";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

// import HeroPage from "./HeroPage";
import Chat from "./Chat";

function SidebarChannel() {
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
            <div className="friends">
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
              <div className="profile">
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

              <div className="profile">
                <div className="profile_avatar">
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div className="username">
                  Trevor
                  <span className="status"></span>
                </div>
              </div>

              <div className="profile">
                <div className="profile_avatar">
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div className="username">
                  Agnes
                  <span className="status">
                    Playing Gta
                    <span>
                      <SubjectIcon />
                    </span>
                  </span>
                </div>
              </div>

              <div className="profile">
                <div className="profile_avatar">
                  <Avatar
                    alt="Cindy Baker"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div className="username">
                  Cindy
                  <span className="status">
                    Streaming Minecraft{" "}
                    <span>
                      <SubjectIcon />
                    </span>
                  </span>
                </div>
              </div>

              <div className="profile">
                <div className="profile_avatar">
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div className="username">
                  Travis
                  <span className="status"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="user_info">
            <div className="user_info_avatar ">
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 32, height: 32 }}
              />
              <span color="success" className="online_status"></span>
            </div>
            <div className="username">
              Cindy
              <span className="status">#2232</span>
            </div>
            <div className="btm_icons">
              <MicIcon sx={{ width: 22, height: 22 }} />
              <HeadphonesIcon sx={{ width: 22, height: 22 }} />
              <SettingsIcon sx={{ width: 22, height: 22 }} />
            </div>
          </div>
        </div>
        <div>
          {/* <HeroPage /> */}
          <Chat />
        </div>
      </div>
    </>
  );
}

export default SidebarChannel;
