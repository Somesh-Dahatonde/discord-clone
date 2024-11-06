import React, { useState, useEffect } from "react";
import "./Chat.css";
import "./ChannelChat.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import HelpIcon from "@mui/icons-material/Help";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { db } from "./Firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
} from "firebase/firestore";

function ChannelChat({ channel }) {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    const channelCollection = collection(db, "channels");

    // Create a query to fetch channels for a specific server
    const serverQuery = query(
      channelCollection,
      where("serverName", "==", channel.serverName)
    );

    const unsubscribe = onSnapshot(serverQuery, (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          uniqueKey: `${doc.data().serverName}-${
            doc.data().channelName.channelName
          }`,
          ...doc.data(), // Use spread operator to get channel data
        }))
      );
    });

    return () => unsubscribe();
  }, [channel.serverName]); // Add server name dependency to re-fetch on change

  useEffect(() => {
    if (channel && channel.serverName && channel.channelName.channelName) {
      const messagesCollection = collection(
        db,
        "channels",
        `${channel.serverName}-${channel.channelName.channelName}`, // Construct path using serverName and channelName
        "messages"
      );

      console.log(messagesCollection, "sdfa");
      const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });

      return () => unsubscribe();
    } else {
      console.warn("Channel or channel details are not defined");
    }
  }, [channel]);

  // Handle adding a new channel
  const handleAddChannel = async () => {
    const channelName = prompt("Enter a new channel name:");
    if (channelName) {
      try {
        await addDoc(collection(db, "channels"), {
          channelName: { channelName }, // Store as an object
          creatorUserId: user.email, // Use user email for creator ID
          serverName: channel.serverName, // Use the server name from the current context
          channelCreator: user.displayName, // Use user's display name
        });
      } catch (error) {
        console.error("Error creating channel:", error);
      }
    } else {
      alert("Channel name can't be empty");
    }
  };

  // Handle sending a message to the current channel
  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (messages && channel) {
      // Ensure channel is defined
      const channelCollectionPath = `channels/${channel.serverName}-${channel.channelName.channelName}/messages`;
      await addDoc(collection(db, channelCollectionPath), {
        text: input,
        user: user.displayName,
        timestamp: new Date(),
      });
      event.target.reset(); // Clear input after sending
    }
  };

  return (
    <>
      <div className="Channel_chat_contener">
        <div className="channel_lists">
          <div className="Channel_chat_header">
            <span>{channel.serverName}</span>
            {/* <span>app-quote</span> */}
            <ExpandMoreIcon />
          </div>
          <div className="Channels_group">
            <div className="Channels_group_name">
              <div className="channel_list_header">
                <p>
                  <ExpandMoreIcon />
                  {/* ChevronRightOutlinedIcon */}
                  Text Channels
                </p>
                <AddRoundedIcon onClick={handleAddChannel} />
              </div>
              <div
                className="text_channel_name"
                onClick={() =>
                  setSelectedChannel(channel.channelName.channelName)
                }
              >
                <span className="sidebar_channellist_hash">#</span>
                <span>{channel.channelName.channelName}</span>
              </div>
              {channels.map((channel) => (
                <div
                  className="text_channel_name"
                  key={channel.id}
                  id={channel.id}
                  onClick={() =>
                    setSelectedChannel(channel.channelName.channelName)
                  }
                >
                  <span className="sidebar_channellist_hash">#</span>
                  <span>{channel.channelName.channelName}</span>
                </div>
              ))}
            </div>
            <div className="Channels_group_name voice">
              <div className="channel_list_header">
                <p>
                  <ExpandMoreIcon />
                  {/* <ChevronRightOutlinedIcon /> */}
                  Voice Channels
                </p>
                <AddRoundedIcon />
              </div>
              <div className="voice_channel_name">
                <VolumeUpRoundedIcon />
                <span>General</span>
              </div>
              <div className="text_channel_name">
                <VolumeUpRoundedIcon />
                <span>web-app</span>
              </div>
            </div>
          </div>
          <div className="user_info">
            <div className="user_info_avatar ">
              <Avatar
                alt={user.displayName}
                src={user.photo}
                sx={{ width: 32, height: 32 }}
              />
              <span color="success" className="online_status"></span>
            </div>
            <div className="username">
              <div className="username_atbottom">{user.displayName}</div>

              <span className="status">#{user.uid.substring(0, 4)}</span>
            </div>
            <div className="btm_icons">
              <MicIcon sx={{ width: 22, height: 22 }} />
              <HeadphonesIcon sx={{ width: 22, height: 22 }} />
              <SettingsIcon sx={{ width: 22, height: 22 }} />
            </div>
          </div>
        </div>
        <div className="Channel_chat">
          <div className="Channel_chat_header">
            <div className="channel_username">
              <span>#</span>
              <span>general</span>
            </div>
            <div className="Channel_chat_header_right">
              <div className="Channel_chat_header_right_icons">
                <div className="channel_chat_header_icons_group">
                  <NotificationsIcon className="NotificationsIcon icon" />
                  <PushPinIcon className="pin_icon icon" />
                  <PeopleAltIcon className="add_icon icon" />
                  <div>
                    <input type="text" placeholder="Search" />
                    <SearchIcon className="search_icon icon" />
                  </div>
                  <InboxOutlinedIcon className="InboxOutlinedIcon icon " />
                  <HelpIcon className="HelpIcon icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="Channel_chat_body">
            <div className="message_body">
              <div className="message_body_chat">
                <div className="User_info_header">
                  <div className="User_Info_avatar">
                    <span> #</span>
                    <h1 className="username_user_info channel_tag">
                      Welcome to #{selectedChannel}!
                    </h1>
                    {/* <div className="username_withid">RemySharp#2232</div> */}
                    <div className="custom_message">
                      This is the begining of the #{channel.serverName}.
                    </div>
                  </div>
                  <div className="chat_header_horizontal_line"></div>
                </div>

                <div className="message_body_content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora necessitatibus vero, accusamus id ipsa enim cumque,
                    amet at aliquam odit, eveniet nulla voluptates facere
                    possimus asperiores nam. Possimus, facilis nobis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora necessitatibus vero, accusamus id ipsa enim cumque,
                    amet at aliquam odit, eveniet nulla voluptates facere
                    possimus asperiores nam. Possimus, facilis nobis.
                  </p>

                  {messages.length > 0 && messages ? (
                    messages.map((message) => (
                      <p key={message.id}>{message.text}</p>
                    ))
                  ) : (
                    <div>
                      <span>no message</span>
                    </div>
                  )}
                </div>
                <div className="message_input">
                  <div className="input_icon">
                    <form onSubmit={handleSendMessage}>
                      <input
                        type="text"
                        id="fullWidth"
                        placeholder="Message"
                        onChange={(e) => setInput(e.target.value)}
                      />
                    </form>

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
              <div className="groupuser_list ">
                <div className="groupuser_list_header">
                  <div className="no_off_user">ONLINE - 1</div>
                  <div className="online_user_lists">
                    <div className="online_user_list_avatar">
                      <Avatar
                        alt={user.displayName}
                        src={user.photo}
                        sx={{ width: 32, height: 32 }}
                      />
                      <span className="online_status"></span>
                      <div className="online_user_list_username">
                        <span className="username">{user.displayName}</span>
                        <span>Playing visual studio code </span>
                      </div>
                    </div>
                  </div>
                  <div className="no_off_user_offline">Offline - 2</div>
                  <div className="online_user_lists">
                    <div className="online_user_list_avatar">
                      <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 32, height: 32 }}
                      />

                      <div className="online_user_list_username">
                        <span className="username">Cindy Baker</span>
                      </div>
                    </div>
                  </div>
                  <div className="online_user_lists">
                    <div className="online_user_list_avatar">
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 32, height: 32 }}
                      />
                      <span className="online_status"></span>
                      <div className="online_user_list_username">
                        <span className="username">Remy Sharp</span>
                        <span>Playing visual studio code </span>
                      </div>
                    </div>
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

export default ChannelChat;
