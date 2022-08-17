import React from "react";
import RecentBlog from "./RecentBlog";
import blogimg1 from "../../assets/img/blog/blog_1.jpg";

const SidebarRecent = () => {
  return (
    <div className="sidebar-block">
      <h3 className="sidebar-title">Recent Blog</h3>
      <RecentBlog
        postthumb={blogimg1}
        title="Even the all-powerful Pointing has no control"
        posttime="July 12, 2018"
        authorname="Admin"
        comment="19"
      />
      <RecentBlog
        postthumb={blogimg1}
        title="Even the all-powerful Pointing has no control"
        posttime="July 12, 2018"
        authorname="Admin"
        comment="19"
      />
      <RecentBlog
        postthumb={blogimg1}
        title="Even the all-powerful Pointing has no control"
        posttime="July 12, 2018"
        authorname="Admin"
        comment="19"
      />
      <RecentBlog
        postthumb={blogimg1}
        title="Even the all-powerful Pointing has no control"
        posttime="July 12, 2018"
        authorname="Admin"
        comment="19"
      />
    </div>
  );
};

export default SidebarRecent;
