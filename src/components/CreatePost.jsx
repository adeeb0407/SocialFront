import { padding } from "@mui/system";
import React, { useState, useEffect, useRef } from "react";
import "./style/createPost.css";
import Filebase from "react-filebase64";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost, idCapture, updatePost} from "../action/postAction";
import { Redirect } from "react-router";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import isMuiElement from "@mui/utils/isMuiElement";

function CreatePost() {
  const [createPost, setCreatePost] = useState({
    title: "",
    caption: "",
    tags: [],
    imageUpload: "",
  });

  const [errorStyleTitle, setErrorStyleTitle] = useState({});
  const [errorStyleCaption, setErrorStyleCaption] = useState({});
  const [titleError, setTitleError] = useState("");
  const [captionsError, setCaptionsError] = useState("");
  const [imageUploadError, setImageUploadError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [preview, setPreview] = useState(false);
  const [previewError, setPreviewError] = useState("");
  const [clearMessage, setClearMessage] = useState("");

  const Capture = useSelector((state) => state.idCaptureEvent);
  const post = useSelector((state) =>
    Capture ? state.posts.find((message) => message._id === Capture) : null
  );
  console.log(post);
  console.log(Capture);

  let dispatch = useDispatch();
  const reference = useRef(0);

  useEffect(() => {
    if (post) setCreatePost(post);
  }, [post]);

  const clear = (id) => {
    dispatch(idCapture(id));
    setCreatePost({ title: "", caption: "", tags: [], imageUpload: "", createdAt: new Date(), likeCount: 0});
    setClearMessage('The Current Post Information has been Cleared')
  };

  let handelChange = (e) => {
    let { name, value } = e.target;
    setClearMessage('')
    setCreatePost({ ...createPost, [name]: value });

    if (createPost.title.trim() !== "" && createPost.caption.trim() !== "") {
      setErrorStyleTitle({
        border: "2px solid #0FBC5B",
        focusColor: "#0FBC5B",
      });
      setTitleError("");
      setErrorStyleCaption({ border: "2px solid #0FBC5B" });
      setCaptionsError("");
    } else if (createPost.title.trim() !== "") {
      setErrorStyleTitle({
        border: "2px solid #0FBC5B",
        focusColor: "#0FBC5B",
      });
      setTitleError("");
    } else if (createPost.caption.trim() !== "") {
      setErrorStyleCaption({ border: "2px solid #0FBC5B" });
      setCaptionsError("");
    } else if (createPost.imageUpload.trim() !== "") {
      setImageUploadError("");
    }
  };

  let handelCreatePost = async (e) => {
    e.preventDefault();
    if (createPost.title.trim() === "") {
      setErrorStyleTitle({ border: "2px solid #D31529" });
      setTitleError("Please Enter a Title for your Post");
    } else if (createPost.caption.trim() === "") {
      setErrorStyleCaption({ border: "2px solid #D31529" });
      setCaptionsError("Please Enter the Caption for your Post");
    } else if (createPost.imageUpload.trim() === "") {
      setImageUploadError("Please Upload a Image to Post");
    } else {
      if (Capture === null) {
        dispatch(createNewPost(createPost));
      } else {
        dispatch(updatePost(Capture, createPost));
      }
      setRedirect(true);
      setPreviewError("");
      setPreview(true);
    }
  };

  let handelPreview = () => {
    let previewPost = document.getElementById("preview");

    if (preview) {
      previewPost.style.display = "block";
    } else {
      setPreviewError("Please Enter the Content to see a Preview");
    }
    if (createPost.title.trim() === "") {
      setErrorStyleTitle({ border: "2px solid #D31529" });
      setTitleError("Please Enter a Title for your Post");
    } else if (createPost.caption.trim() === "") {
      setErrorStyleCaption({ border: "2px solid #D31529" });
      setCaptionsError("Please Enter the Caption for your Post");
    } else if (createPost.imageUpload.trim() === "") {
      setImageUploadError("Please Upload a Image to Post");
    } else {
      setPreviewError("");
      setPreview(true);
      previewPost.style.display = "block";
    }
  };
  return (
    <>
      <div className="box-root padding-bottom--24 flex-flex flex-justifyContent--center">
        {redirect ? <Redirect to="/" /> : ""}
        <h1>
          <a href="#" rel="dofollow">
            {Capture ? `Editing` : `Create`} Post
          </a>
        </h1>
      </div>
      <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span className="padding-bottom--15">
              {Capture ? `Editing` : `Create`} a Post <CreateOutlinedIcon />
            </span>
            <form id="stripe-login" onSubmit={handelCreatePost}>
              <div className="field padding-bottom--24">
                <label name="">Title</label>
                <input
                  type="text"
                  value={createPost.title}
                  name="title"
                  onChange={handelChange}
                  style={errorStyleTitle}
                />
                <small>{titleError}</small>
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label name="caption">Caption</label>
                </div>
                <textarea
                  rows="10"
                  cols="55"
                  type="text"
                  name="caption"
                  value={createPost.caption}
                  onChange={handelChange}
                  style={errorStyleCaption}
                />
                <small>{captionsError}</small>
              </div>
              <div className="padding-bottom--24">
                <label name="image">Upload image</label>
                <Filebase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setCreatePost({ ...createPost, imageUpload: base64 })
                  }
                />
                <br />
                <small>{imageUploadError}</small>
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label name="tags">Tags</label>
                </div>
                <input
                  type="text"
                  placeholder="Spereate tags using ,"
                  name="tags"
                  value={createPost.tags}
                  onChange={(e) =>
                    setCreatePost({
                      ...createPost,
                      tags: e.target.value.split(","),
                    })
                  }
                />
              </div>
              <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                <label name="checkbox">
                  <input type="checkbox" name="checkbox" /> Stay signed in for a
                  week
                </label>
              </div>
              <div className="field padding-bottom--24">
                {Capture ? (
                  <input type="submit" name="submit" value="Repost" />
                ) : (
                  <input type="submit" name="submit" value="Post" />
                )}
              </div>
              <div className="field padding-bottom--24">
                <input
                  type="button"
                  name="submit"
                  value="preview"
                  onClick={handelPreview}
                />
                <small>{previewError}</small>
              </div>
              <div className="field padding-bottom--24">
                <input
                  type="button"
                  name="submit"
                  value="Clear"
                  onClick={() => clear(null)}
                />
                <small style={{color : 'green'}}>{clearMessage}</small>
              </div>
            </form>
          </div>
        </div>
        <div
          class="card"
          id="preview"
          style={{ height: "70vh" }}
          key={createPost._id}
          ref={reference}
        >
          <div class="card-header">
            <img src={createPost.imageUpload} alt="rover" />
          </div>
          <div class="card-body">
            <div className="card-tags">
              {createPost.tags.map((tagItem, index) => (
                <span
                  class="tag tag-teal"
                  style={{ marginRight: "5px" }}
                  key={index}
                >
                  #{tagItem}
                </span>
              ))}
            </div>
            <h4>{createPost.title}</h4>
            <div>
              <p>{createPost.caption}</p>
            </div>
            {/* <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
