import React from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import CallIcon from "@mui/icons-material/Call";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import VideocamIcon from "@mui/icons-material/Videocam";
import PushPinIcon from "@mui/icons-material/PushPin";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SearchIcon from "@mui/icons-material/Search";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import HelpIcon from "@mui/icons-material/Help";

function Chat() {
  return (
    <>
      <div className="main_contnet">
        <div className="messgage_header">
          <div className="message_header_left">
            <div className="message_header_left_icons">
              <Avatar
                sx={{ bgcolor: deepOrange[500], width: 26, height: 26 }}
                className="avatar"
                alt="Remy Sharp"
              />
              <span color="success" className="online_status"></span>
            </div>
            <span className="username">Remy Sharp</span>
          </div>

          <div className="message_header_right">
            <div className="message_header_right_icons">
              <div>
                <WifiCalling3Icon className="call_icon  icon" />
              </div>
              <div>
                <VideocamIcon className="video_icon icon" />
              </div>
              <div>
                <PushPinIcon className="pin_icon icon" />
              </div>
              <div>
                <PersonAddAlt1Icon className="add_icon icon" />
              </div>
              <div className="input_div">
                <input type="text" placeholder="Search" />
                <SearchIcon className="search_icon icon" />
              </div>
              <div>
                <InboxOutlinedIcon className="InboxOutlinedIcon icon " />
              </div>
              <div>
                <HelpIcon className="HelpIcon icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="message_body">asjdadsadkh</div>
      </div>
    </>
  );
}

export default Chat;
