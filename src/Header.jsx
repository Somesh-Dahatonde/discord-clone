import React from "react";
import "./Header.css";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Badge from "@mui/material/Badge";
import MarkChatUnreadRoundedIcon from "@mui/icons-material/MarkChatUnreadRounded";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import HelpIcon from "@mui/icons-material/Help";

export const Header = () => {
  const [count, setCount] = React.useState(1);
  // console.log(setCount);
  return (
    <>
      <div className="header">
        <div className="header_leftside">
          <div className="header_friends_btn">
            <PersonAddAlt1Icon />
            <span>Friends</span>
          </div>
          <span className="line"></span>
          <div className="header_search">
            <div className="online_friends">
              <span className="online_btn ">Online</span>
            </div>
            <div className="online_friends">
              <span>All</span>
            </div>
            <div className="online_friends">
              <Badge color="error" badgeContent={count}>
                <span> Pending</span>
              </Badge>
            </div>
            <div className="online_friends">
              <Badge color="error" badgeContent={count}>
                <span>Suggestion</span>
              </Badge>
            </div>
            <div className="online_friends">
              <span>Blocked</span>
            </div>
            <div className="add_frd_btn">
              <button className="button">Add Friend</button>
            </div>
          </div>
        </div>
        <div className="header_rightside">
          <div className="header_rightside_icons">
            <div>
              <MarkChatUnreadRoundedIcon />
            </div>

            <span className="line"></span>
            <div>
              {" "}
              <InboxOutlinedIcon className="InboxOutlinedIcon " />
            </div>

            <div>
              {" "}
              <HelpIcon className="HelpIcon" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="horizontal_line"></div> */}
    </>
  );
};

export default Header;
