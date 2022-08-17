import React from "react";

const RecentBlog = (props) => {
  return (
    <div className="blog-item">
      <a className="post-thumb" href="/">
        <img src={props.postthumb} alt="" />
      </a>
      <div className="content">
        <h5 className="post-title">
          <a href="/">{props.title}</a>
        </h5>
        <div className="meta">
          <a href="/">
            <span className="mai-calendar"></span> {props.posttime}
          </a>
          <a href="/">
            <span className="mai-person"></span> {props.authorname}
          </a>
          <a href="/">
            <span className="mai-chatbubbles"></span> {props.comment}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
