import React, { useEffect, useState } from "react";
import "./style/displayPost.css";
import { getPosts, idCapture, deletePost } from "../action/postAction";
import Loading from "./Loading";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import moment from "moment";

function DisplayPosts() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [postId, setPostId] = useState("");
  const Capture = useSelector((state) => state.idCaptureEvent);

  console.log(Capture);
  useEffect(() => {
    dispatch(getPosts(), setLoading(false));
  }, [Capture, loading, dispatch]);

  const posts = useSelector((state) => state.posts); // get the posts state globally (anywhere in the app)
  const likeCount = useSelector((state) => state.posts.likeCount); // get the posts state globally (anywhere in the app)
  const [like, setLike] = useState(false);
  const [likeColor, setLikeColor] = useState("");

  let handelLike = () => {
    setLike(!like);
    if (like) {
      console.log(likeCount);
      setLikeColor("#D31529");
    } else {
      setLikeColor("");
    }
  };

  let handelId = (postID) => {
    dispatch(idCapture(postID));
    setRedirect(true);
    console.log(postID);
  };

  if (!posts.length) {
    return <Loading />;
  } else if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="displayPost">
        {redirect ? <Redirect to="/createpost" /> : ""}
        {posts
          .map((postItem) => (
            <div class="card" key={postItem._id}>
              <div class="card-header">
                <img src={postItem.imageUpload} alt="rover" />
              </div>
              <div class="card-body">
                <div className="card-tags">
                  {postItem.tags.map((tagItem, index) => (
                    <span
                      class="tag tag-teal"
                      style={{ marginRight: "5px" }}
                      key={index}
                    >
                      #{tagItem}
                    </span>
                  ))}
                </div>
                <h4>{postItem.title}</h4>
                <p>{postItem.caption}</p>
                <div class="user">
                  <img
                    src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="user"
                  />
                  <div class="user-info">
                    <h5>July Dec</h5>
                    <small>{moment(postItem.createdAt).fromNow()}</small>
                  </div>
                </div>
                <div className="extra_section">
                  <div className="likes">
                    <ThumbUpIcon
                      style={{ color: likeColor }}
                      onClick={handelLike}
                    />
                    <span>{postItem.likeCount} Likes</span>
                  </div>
                  <div className="update">
                    <button onClick={() => handelId(postItem._id)}>
                      <UpdateIcon style={{ marginLeft: "auto" }} />
                    </button>
                    <button
                      style={{ backgroundColor: "#D31529" }}
                      onClick={() => dispatch(deletePost(postItem._id))}
                    >
                      <DeleteIcon style={{ marginLeft: "auto" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    );
  }
}

export default DisplayPosts;
