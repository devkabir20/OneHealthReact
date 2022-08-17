import React from 'react'

const PostCard = (props) => {
  return (
    <div className="col-sm-6 py-3">
      <div className="card-blog">
        <div className="header">
          <div className="post-category">
            <a href="/">{props.category}</a>
          </div>
          <a href="blog-details" className="post-thumb">
            <img src={props.postthumb} alt="" />
          </a>
        </div>
        <div className="body">
          <h5 className="post-title">
            <a href="blog-details.html">
              {props.title}
            </a>
          </h5>
          <div className="site-info">
            <div className="avatar mr-2">
              <div className="avatar-img">
                <img src= {props.authorimg} alt="" />
              </div>
              <span>{props.authorname}</span>
            </div>
            <span className="mai-time"></span> {props.posttime}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard
