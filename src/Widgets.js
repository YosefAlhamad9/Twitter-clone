import './widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";
const Widgets = () => {
    return (
        <div className="widgets">
          <div className="widgets--input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets--widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1177995308267126784"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="shugairi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
        </div>
    );
}
 
export default Widgets;