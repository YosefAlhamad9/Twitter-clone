import { Avatar } from "@material-ui/core";
import './post.css';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { forwardRef } from 'react';
import profile from "../src/img/search.svg";
const Post = forwardRef (({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {

    
    return (
        <div className="post" ref={ref}>
            <div className="post--avatar">
            <Avatar src={profile} />
            </div>
            <div className="post--body">
                <div className="post--header">
                    <div className="post--headerText">
                        <h3>
                        {displayName} {" "} 
                        <span className="post--headerSpeical">
                            {verified && < VerifiedUserIcon className="post--badge" />}
                            @ {username}
                        </span>
                        </h3>
                    </div>
                    <div className="post--headerDescription">
                            <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post--footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
          </div>
            </div>

        </div>
    );
}
);
 
export default Post;