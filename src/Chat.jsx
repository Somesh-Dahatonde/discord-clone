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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Chat() {
  const completeDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[completeDate.getMonth()];
  const day = completeDate.getDate();
  const year = completeDate.getFullYear();
  const date = `${month} ${day},${year}`;

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

        <div className="message_body">
          <div className="message_body_chat">
            <div className="User_info_header">
              <div className="User_Info_avatar">
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 76, height: 76 }}
                  className="avatar"
                  alt="Remy Sharp"
                />
                <h1 className="username_user_info">Remy Sharp</h1>
                <div className="username_withid">RemySharp#2232</div>
                <div className="custom_message">
                  This is the begining of direct message history with RemySharp
                </div>
                <div className="common_server_btn">
                  <div className="common_server_text">No server in common</div>
                  <div className="btn_group">
                    <div className="remove_frd">
                      <button type="submit">Remove Friend</button>
                    </div>
                    <div className="block_frd">
                      <button className="submit">Block</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat_header_horizontal_line"></div>
            </div>

            <div className="message_body_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                necessitatibus vero, accusamus id ipsa enim cumque, amet at
                aliquam odit, eveniet nulla voluptates facere possimus
                asperiores nam. Possimus, facilis nobis.
              </p> */}
            </div>
            <div className="message_input">
              <div className="input_icon">
                <input
                  type="text"
                  id="fullWidth"
                  placeholder="Messagae @RemySharp"
                />

                <div className="input_icons">
                  <AddCircleIcon className="icon input_icon_addIcon" />
                </div>
                <div className="input_icon_group">
                  <CardGiftcardIcon className="icon" />
                  <GifBoxIcon className="icon" />
                  <EmojiEmotionsIcon className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="message_body_right">
            <div>
              <div className="message_body_right_header">
                <div className="avatar_banner"></div>
                <div className="avatar_border">
                  <Avatar
                    sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}
                    alt="Remy Sharp"
                  />
                </div>
                <div className="avatar_status"></div>
              </div>
            </div>
            <div className="message_body_right_content">
              <div>
                <p className="username_user_info">Remy Sharp</p>
                <div className="username_withid">RemySharp#2232</div>
              </div>
              <div className="horizontal_line"></div>
              <div>
                <div>
                  <p className="member_from">Discord member sincs</p>
                  <div className="date">{date}</div>
                </div>
              </div>
              <div className="horizontal_line"></div>
              <div>
                {" "}
                <div>
                  <p className="member_from">Note</p>
                  <div className="note">Click to add</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
