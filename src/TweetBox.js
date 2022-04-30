import './tweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import { useState } from 'react';
import db from './firebase';
import imageprofile from '../src/img/yosef.jpg';

const TweetBox = () => {
    
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        displayName: "Yosef Alhamad",
        username: "yosef-alhamd",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: {imageprofile}
      });
  
      setTweetMessage("");
      setTweetImage("");
    };

    return (
        <div className="tweetBox">
         <form>
         <div className="tweetBox--input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox--imageinput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox--tweet-Button"
        >
          Tweet
        </Button>
         </form>
        </div>
    );
}
 
export default TweetBox;