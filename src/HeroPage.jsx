import React from "react";
import "./HeroPage.css";
import Header from "./Header";
import SubjectIcon from "@mui/icons-material/Subject";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function HeroPage() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="chat">
        <Header />

        <div className="flex flex-row">
          <div className="flex flex-col online_user_list">
            <div>
              <h1>ONLINE — 6</h1>
            </div>
            <div className="horizontal_line"></div>
            <div className="user">
              <div className="profile">
                <div className="profile_avatar">
                  <Avatar
                    alt={user.displayName}
                    src={user.photo}
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div className="username">
                  {user.displayName}
                  <span className="status">
                    Listening to Spotify
                    <span>
                      <SubjectIcon />
                    </span>
                  </span>
                </div>
              </div>
              <div className="horizontal_line"></div>
            </div>
          </div>
          <div className="vertical_line"></div>
          <div className="active_now">
            <p>Active Now</p>
            <div className="flex flex-col active_user_list">
              <div>
                <div className=" profile profile_active_user">
                  <div className="profile_avatar ">
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 32, height: 32 }}
                    />
                    <span color="success" className="online_status"></span>
                  </div>
                  <div className="username">
                    Cindy
                    <span className="status">Streaming Minecraft 3hr</span>
                  </div>
                </div>

                <div className=" profile profile_active_user">
                  <div className="profile_avatar ">
                    <Avatar
                      alt="Dairy Baker"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 32, height: 32 }}
                    />
                    <span color="success" className="online_status"></span>
                  </div>
                  <div className="username">
                    Dairy
                    <span className="status">GTA 2hr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;

// online user list

{
  /* <div className="profile">
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
              <div className="horizontal_line"></div>
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
              <div className="horizontal_line"></div>
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
              <div className="horizontal_line"></div>
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
              <div className="horizontal_line"></div> */
}
